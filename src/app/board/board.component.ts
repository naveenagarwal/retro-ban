import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { Item } from '../item';
import { Board } from '../board';
import { BoardService } from '../services/board.service'
import { CookieService } from 'angular2-cookie/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

declare var jQuery: any;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  sections: any;
  sectionId: string;
  itemId: string;
  sectionName: string;
  boardName: string;
  item: any;
  retroBoard: any;
  index: any;
  id: any;

  constructor(
      private board: BoardService,
      private route: ActivatedRoute,
      private cookieService: CookieService,
      private router: Router
    ) {
    this.item = { id: "", title: "", content: "", sectionId: "" };
    this.boardName = "New Board";
   }

  ngOnInit() {
    console.log("calling create");
    this.id = this.route.snapshot.params['id']

    if(!this.id){
      this.board.create(this.boardName, this.cookieService.get("userId") ).subscribe(
        (data) => {
          this.retroBoard = data;
          this.sections = this.retroBoard.Sections;
          this.boardName = this.retroBoard.name;
          this.id = data.id;
        }
      );
    }else {
      this.board.get(this.id).subscribe(
        (data) => {
          this.retroBoard = data;
          this.sections = this.retroBoard.Sections;
          this.boardName = this.retroBoard.name;
        }
      );
    }

  }

  addItem(sectionId) {
    let index = null;
    for(let i=0; i < this.sections.length; i++){
      if(this.sections[i].id === sectionId ){
        index = i;
        break;
      }
    }
    let id = this.sections[index].Items.length + 1
    let item = {
      title: this.item.title,
      content: this.item.content,
      SectionId: this.sections[index].id
    }

    this.board.addItem(item).subscribe(
        (data) => {
          this.sections[index].Items.push(data);
          this.sectionId = null;
          this.sectionName = null;
        }
      );

  }

  removeItem(sectionId, itemId){
    let index = null;
    for(let i=0; i < this.sections.length; i++){
      if(this.sections[i].id === sectionId ){
        for(let j=0; j<this.sections[i].Items.length; j++){
          if(this.sections[i].Items[j].id == itemId){
            this.sections[i].Items.splice(j, 1);
            break;
          }
        }
        break;
      }
    }
    this.sectionId = null;
    this.itemId = null;
  }

  showRemoveStickyModal(sectionId, itemId){
    this.sectionId = sectionId;
    this.itemId = itemId;
    jQuery("#removeStickyModal").modal();
  }

  showAddStickyModal(sectionId, sectionName, index){
    this.index = index;
    this.sectionId = sectionId;
    this.sectionName = sectionName;
    this.item = { id: "", title: "", content: "", sectionId: "" };
    jQuery("#addStickyModal").modal();
  }

  showEditStickyModal(sectionName, item, index){
    this.index = index;
    this.sectionId = item.sectionId;
    this.sectionName = sectionName;
    this.item = item;
    jQuery("#editStickyModal").modal();
  }

  editItem(item) {
    let index = null;
    for(let i=0; i < this.sections.length; i++){
      if(this.sections[i].id === item.sectionId ){
        for(let j=0; j<this.sections[i].Items.length; j++){
          if(this.sections[i].Items[j].id == item.id){
            this.sections[i].Items[j] = item;
            break;
          }
        }
        break;
      }
    }
  }

  updateBoardName() {
    this.board.update(this.id, { name: this.boardName }).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}

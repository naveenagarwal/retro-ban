import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service'
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBoards: any;

  constructor(
      private boardService: BoardService,
      private cookieService: CookieService
    ) { }

  ngOnInit() {
    if(this.cookieService.get("userId")){
      this.boardService.all(this.cookieService.get("userId")).subscribe(
        (data) =>  {
          this.allBoards = data
        }
      )
    }else{
      this.allBoards = [];
    }

  }

}

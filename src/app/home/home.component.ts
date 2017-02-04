import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBoards: any;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.all().subscribe(
        (data) =>  {
          this.allBoards = data
        }
      )
  }

}

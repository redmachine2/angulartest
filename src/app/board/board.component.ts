import {Component, EventEmitter, OnInit} from '@angular/core';
import {Squares} from "../game/game.component";

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  inputs: ['squares'],
  outputs: ['squaresChange']
})
export class BoardComponent implements OnInit {
  squares: Squares;
  squaresChange: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

}

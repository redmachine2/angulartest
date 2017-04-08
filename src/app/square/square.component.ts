import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'Square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  inputs: ['value'],
  outputs: ['handleClick']
})
export class SquareComponent implements OnInit {
  handleClick: EventEmitter<any> = new EventEmitter();
  value: string;

  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {SquareComponent} from "../square/square.component";

describe('BoardComponent', () => {
  let component: BoardComponent;
  // let square: SquareComponent;
  let fixture: ComponentFixture<BoardComponent>;
  // let squareFixture: ComponentFixture<SquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    // squareFixture = TestBed.createComponent(SquareComponent);
    // square = squareFixture.componentInstance;
    component = fixture.componentInstance;

    // square.value = null;
    component.squares = {"squares": Array(9).fill(null)};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

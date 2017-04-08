import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import {BoardComponent} from "../board/board.component";
import {SquareComponent} from "../square/square.component";

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent, BoardComponent, SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('update on first click should make history length 2, xisNext should be false', () =>{
    component.update(1);
    expect(component.history.length).toEqual(2);
    expect(component.stepNumber).toEqual(1);
    expect(component.xIsNext).toBeFalsy()
  });

  it('update on second click should make history length be 3, xIsNext should be true', () =>{
    //first click
    component.update(1);
    //second click
    component.update(2);

    expect(component.history.length).toEqual(3);
    expect(component.stepNumber).toEqual(2);
    expect(component.xIsNext).toBeTruthy();
  });

  it('update on same click should return', ()=>{
    //first click
    component.update(1);
    //second click
    component.update(1);

    expect(component.history.length).toEqual(2);
    expect(component.stepNumber).toEqual(1);
    expect(component.xIsNext).toBeFalsy();
  });

  it('calculate winner should return true if a winner', ()=>{
    //assumes 0, 1, 2 are X
    let squares = ["X", "X", "X", "O", "O", null,null, null, null];
    expect(component.calculateWinner(squares)).toBeTruthy();
  });

  it('calculate winner should return false if not a winner', ()=>{
    let squares = [null, null, null, null, null, null,null, null, null];
    expect(component.calculateWinner(squares)).toBeFalsy();
  });

  it('jumpTo should set stepNumber to step', ()=>{
    //assumes 5 clicks before being called so nothing breaks from index issues
    component.update(0);
    component.update(1);
    component.update(2);
    component.update(3);
    component.update(4);

    spyOn(component, 'render').and.returnValue(null);
    component.jumpTo(4);
    expect(component.stepNumber).toEqual(4);
    expect(component.render).toHaveBeenCalled();

    component.jumpTo(3);
    expect(component.stepNumber).toEqual(3);
    expect(component.render).toHaveBeenCalled();
  });

  it('render should update current, set status based on if winner', ()=>{
    //assume no winner
    component.render();
    expect(component.status).toContain('Next Player:');
  });

  it('render should update current, set status to winner if winner', ()=>{
    //we have a winner
    component.history = [{"squares": ["X", "X", "X", null, null, null, null, null, null]}];
    component.render();
    expect(component.status).toContain('Winner');
  })
});

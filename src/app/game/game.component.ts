import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  history: Squares[];
  stepNumber: number;
  xIsNext: boolean;
  current: Squares;
  status: string;
  moves: any;

  constructor() {
    this.history = [{
      squares: Array(9).fill(null)
    }];
    this.xIsNext = true;
    this.stepNumber = 0;
  }

  ngOnInit() {
    this.render();
  }

  update(i){
    const squares = this.current.squares.slice();
    if(this.calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.xIsNext ? 'X' : 'O';
    this.history.push({squares});
    this.xIsNext = !this.xIsNext;
    this.stepNumber = this.history.length - 1;
    this.render();
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  jumpTo(step){
    this.stepNumber = step;
    this.xIsNext = (step % 2) ? false : true;
    this.render();
  }

  render(){
    this.current = this.history[this.stepNumber];
    const winner = this.calculateWinner(this.current.squares);
    if(winner){
      this.status = 'Winner: ' + winner;
    }else{
      this.status = 'Next Player: ' + (this.xIsNext ? 'X' : 'O');
    }

    this.moves = this.history.map((step, move) =>{
      const desc = move ? 'Move #' + move: 'Game Start';
      return {move, desc}
    });
  }

}

export interface Squares{
  squares: String[];
}
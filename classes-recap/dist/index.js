'use strict';

class Player {
  score = 0; //class fields
  numLives = 10; //class fields
  constructor(first, last) {
    //console.log('IN constructor');
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log('BOOYAH');
  }
  looseLife() {
    this.numLives -= 1;
  }
}

const player1 = new Player('bleu', 'steele');
player1.taunt();
console.log(player1);
player1.looseLife();
console.log(player1);

const player2 = new Player('charlie', 'brown');
player2.taunt();

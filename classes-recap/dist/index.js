'use strict';

class Player {
  static desciption = 'Player in our Game'; // static fields => this prop. will not exist on every instance of this class
  #score = 0; //private class fields => it's only usable inside the class
  numLives = 10; //class fields
  #secret() {
    //private method
    console.log('Secret');
  }
  constructor(first, last) {
    //console.log('IN constructor');
    this.first = first;
    this.last = last;
    this.#secret(); // calling private method
  }
  get score() {
    return this.#score;
  }
  //setters
  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive!');
    }

    this.#score = newScore;
  }
  static randomPlayer() {
    return new Player('Andy', 'Samburg');
  }
  get fullName() {
    //getter
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(' ');
    this.first = first;
    this.last = last;
  }

  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log('BOOYAH');
  }
  looseLife() {
    this.numLives -= 1;
  }
}

class adminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

// const player1 = new Player('bleu', 'steele');
// player1.taunt();
// console.log(player1);
// player1.looseLife();
//player1.#score; not acceptable
// console.log(player1.getScore());
// player1.updateScore(28);
// console.log(player1.getScore());
// console.log(player1);
//player1.#secret; => not allowed
//console.log(player1.fullName);
//console.log(player1.score);

// player1.score = 2345;
// console.log(player1.score);

// player1.fullName = 'Majic Johnson';
// console.log(player1);

// const player2 = new Player('charlie', 'brown');
// player2.taunt();

const admin = new adminPlayer('admin', 'micheal', ['delete', 'restore World']);
console.log(admin);

// class Player{
//     public readonly first: string;
//     public readonly last: string;

//     private score: number = 0;

//     constructor(first: string, last: string, score: number){
//         this.first = first;
//         this.last = last;
//         this.score = score;
//     }

//     #secretMethod(): void{
//         console.log('Secret method');
//     }
// }

//class Player{
    //private score: number = 0;

    //constructor(public first: string, public last: string, protected _score: number){// protected modifier is to let TS know that this class field can be used inside its children class)
        
   // }

    // #secretMethod(): void{
    //     console.log('Secret method');
    // }

//     get score(): number{
//         return this._score;
//     }

//     set score(newScore: number){
//         if(newScore < 0){
//             throw new Error('Score can not be negative')
//         }

//         this._score = newScore;
//     }
// }

// class SuperPlayer extends Player{
//     public isAdmin: boolean = true;
//     maxScore(){
//         this._score = 999;
//     }
// }

// const elton = new Player('Elton', "Steele", 5);

// elton.score = -12345;
// console.log(elton.score);

//elton.secretMethod();

//elton.score = 10;

//elton.score = 234;

interface Colorful{
    color: string;
}

interface print{
    print(): void;
}

class Jacket implements Colorful, print{
    constructor(public color: string, public brand: string){}

    print(){
        console.log(`${this.brand} ${this.color} jacket`);
    }
}

const myJacket = new Jacket("Red", "Mustang");

myJacket.print();


interface Payable{
    getpay(): number;
}

abstract class Employee implements Payable{
    constructor(public first: string, public last: string){}

    abstract getpay(): number;

    greet(){
        console.log('Hello!!!');
    }
}

class FullTimeEmployee extends Employee{
    constructor(first: string, last: string, private salary: number){
        super(first, last);
    }
    getpay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(first: string, last: string, private hourlyrate: number, private hoursWorked: number){
        super(first, last);
    }

    getpay(): number {
        return this.hourlyrate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee('Betty', 'Young', 90000);
console.log(betty.getpay());

const ernest = new PartTimeEmployee('Ernest', 'Smith', 200, 40);
console.log(ernest.getpay());

//in -built Ts generics
const colors: Array<string> = [];
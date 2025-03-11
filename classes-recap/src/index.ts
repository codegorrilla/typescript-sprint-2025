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

interface Colorful {
    color: string;
}

interface print {
    print(): void;
}

class Jacket implements Colorful, print {
    constructor(public color: string, public brand: string) { }

    print() {
        console.log(`${this.brand} ${this.color} jacket`);
    }
}

const myJacket = new Jacket("Red", "Mustang");

myJacket.print();


interface Payable {
    getpay(): number;
}

abstract class Employee implements Payable {
    constructor(public first: string, public last: string) { }

    abstract getpay(): number;

    greet() {
        console.log('Hello!!!');
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getpay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }

    getpay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee('Betty', 'Young', 90000);
console.log(betty.getpay());

const ernest = new PartTimeEmployee('Ernest', 'Smith', 200, 40);
console.log(ernest.getpay());

//in -built TS generics
const colors: Array<string> = [];

const employeeCount: Array<number> = [];

abstract class department {
    constructor(public name: string, public type: string) { }

    abstract payBonuses(): number;
}

class software extends department {
    constructor(name: string, type: string, private bonus: number, private exp: number) {
        super(name, type);
    }

    payBonuses(): number {
        return this.bonus * this.exp;
    }
}

const subhranil = new software('Software', 'IT', 10, 10);

console.log(subhranil.payBonuses());

// function identity<Type>(item: Type): Type{
//     return item;
// }

interface Cat {
    color: string;
    breed: string;
}

function identity<T>(item: T): T {
    return item;
}

identity<number>(7);
// identity<Cat>(item: Cat): Cat{
//     return item;
// };

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([2, 3, 5, 6, 8]));

function merge<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    };
}

const comboObj = merge({ name: "Colt" }, { pets: ["Blue", "Elton"] });

console.log(comboObj);

//merge<{name: string}, {pets: string[]}>({name: "Colt"}, {pets: ["Blue", "Elton"]})


//type constraints
// function merge1<T extends object, U extends object>(object1: T, object2: U) {
//     return {
//         ...object1,
//         ...object2
//     };
// }

// console.log(merge({ name: "Colt" }, 9));


interface lengthy {
    length: number;
}

function printDoubleLength(thing: lengthy): number {
    return thing.length * 2;
}

printDoubleLength("asada");
//printDoubleLength(123);


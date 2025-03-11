"use strict";
// class Player{
//     public readonly first: string;
//     public readonly last: string;
class Jacket {
    color;
    brand;
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.brand} ${this.color} jacket`);
    }
}
const myJacket = new Jacket("Red", "Mustang");
myJacket.print();
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('Hello!!!');
    }
}
class FullTimeEmployee extends Employee {
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getpay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getpay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee('Betty', 'Young', 90000);
console.log(betty.getpay());
const ernest = new PartTimeEmployee('Ernest', 'Smith', 200, 40);
console.log(ernest.getpay());
//in -built TS generics
const colors = [];
const employeeCount = [];
class department {
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class software extends department {
    bonus;
    exp;
    constructor(name, type, bonus, exp) {
        super(name, type);
        this.bonus = bonus;
        this.exp = exp;
    }
    payBonuses() {
        return this.bonus * this.exp;
    }
}
const subhranil = new software('Software', 'IT', 10, 10);
console.log(subhranil.payBonuses());
function identity(item) {
    return item;
}
identity(7);
// identity<Cat>(item: Cat): Cat{
//     return item;
// };
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([2, 3, 5, 6, 8]));
function merge(object1, object2) {
    return {
        ...object1,
        ...object2
    };
}
const comboObj = merge({ name: "Colt" }, { pets: ["Blue", "Elton"] });
console.log(comboObj);
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("asada");
//printDoubleLength(123);

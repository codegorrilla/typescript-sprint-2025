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
    hourlyrate;
    hoursWorked;
    constructor(first, last, hourlyrate, hoursWorked) {
        super(first, last);
        this.hourlyrate = hourlyrate;
        this.hoursWorked = hoursWorked;
    }
    getpay() {
        return this.hourlyrate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee('Betty', 'Young', 90000);
console.log(betty.getpay());
const ernest = new PartTimeEmployee('Ernest', 'Smith', 200, 40);
console.log(ernest.getpay());
//in -built Ts generics
const colors = [];

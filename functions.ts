//all about function annotations in typescript
function mySquare(num: number) {
  return num * num;
}

function myGreet(person: string) {
  return `Hello there! ${person}`;
}

//with a default value
function myNameIs(name: string = 'Sanjib') {
  return `My name is ${name}`;
}

//arrow function
const doSomethingNow = (person: string, age: number, isFunny: boolean) => {
  return `${person} is ${age} years old and is ${isFunny ? false && 'not funny' : true && 'very funny'}`;
};

mySquare(4);
myGreet('Dennis');
console.log(doSomethingNow('Chickenface', 70, true));

let myContent: any = document.createElement('div');
document.documentElement.appendChild(myContent).innerText = myNameIs();

//return type annotation
const addition = (x: number, y: number): number => {
  return x + y;
};

console.log(addition(3, 5));

//returning something to the DOM
const colors = ['red', 'orange', 'yellow'];

colors.map((color) => {
  return color.toUpperCase();
});

//a void function
const printTwice = (msg: string): void => {
  console.log(msg);
};

//the never type
function makeError(msg: string): never {
  throw new Error(msg);
}

//avoid the clash between variable names used here with the typescript global typings
//export{all}

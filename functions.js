//all about function annotations in typescript
function mySquare(num) {
  return num * num;
}
function myGreet(person) {
  return 'Hello there! '.concat(person);
}
//with a default value
function myNameIs(name) {
  if (name === void 0) {
    name = 'Sanjib';
  }
  return 'My name is '.concat(name);
}
//arrow function
var doSomethingNow = function (person, age, isFunny) {
  return ''
    .concat(person, ' is ')
    .concat(age, ' years old and is ')
    .concat(isFunny ? false && 'not funny' : true && 'very funny');
};
mySquare(4);
myGreet('Dennis');
console.log(doSomethingNow('Chickenface', 70, true));
var myContent = document.createElement('div');
document.documentElement.appendChild(myContent).innerText = myNameIs();
//return type annotation
var addition = function (x, y) {
  return x + y;
};
console.log(addition(3, 5));
//avoid the clash between variable names used here with the typescript global typings
//export{all}

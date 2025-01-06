"use strict";
const btn = document.getElementById('btn'); //non-null assertion operator -> generally we dont use it in TS though it's a TS operator to assume the element is not a null
const input = document.getElementById('todoinput');
// btn?.addEventListener('click', () => { //? is optional chaining operator
//     console.log(btn);
// });
// const hello: string = "hello";
// "hello".replaceAll("l", "!");
//type assertions
// let word: unknown = "hello";
// const numChars = (word as string).length;
// console.log(`${numChars} characters`);
//real world example for type assertion
btn.addEventListener('click', () => {
    alert(input.value);
    input.value = '';
});
//alternate syntax
//(<HTMLInputElement>input).value => don't use them in react

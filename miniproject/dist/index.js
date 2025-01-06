"use strict";
const btn = document.getElementById('btn'); //non-null assertion operator -> generally we dont use it in TS though it's a TS operator to assume the element is not a null
const input = document.getElementById('todoinput');
const form = document.querySelector("form");
const list = document.getElementById('todoList');
const todos = readToDos();
todos.forEach(createTodo);
function readToDos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON == null)
        return [];
    return JSON.parse(todosJSON);
    //console.log(JSON.parse(todosJSON))
}
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    //console.log('SUBMITTED');
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveToDos();
    input.value = '';
    // console.log(todos);
}
function createTodo(todo) {
    //const newToDoText = input.value;
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveToDos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener('submit', handleSubmit);
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
// btn.addEventListener('click', () => {
//     alert(input.value);
//     input.value = '';
// })
//alternate syntax
//(<HTMLInputElement>input).value => don't use them in react

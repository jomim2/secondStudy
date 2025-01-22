"use strict";
let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: 'typeScript', completed: false };
addTodo(newTodo);
console.log(todos);
const squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10));
class Todo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const todo = new Todo(1, 'Typescript', false);
console.log(todo);
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
function greeter(person) {
    person.sayHello();
}
const me = new Person('Lee');
greeter(me);
class MallardDuck {
    quack() {
        console.log('Quack!');
    }
}
class RedheadDuck {
    quack() {
        console.log('q~uack!');
    }
}
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(person) {
    console.log(`hello ${person.name}`);
}
const me = { name: 'lee', age: 18 };
sayHello(me);

const userInfo = {
    username: 'ungmo2@gmail.com',
    password: '12345',
};

console.log(userInfo);

const student = {
    name: 'Lee',
    age: 20,
    grade: 3
};
const webDeveloper = {
    name: 'lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
};

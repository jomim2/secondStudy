"use strict";
let myAge = 20;
// 지정한것만 들어갈 수 있음
let now = 'error';
let jomimi = {
    name: "lee",
    age: 28,
    skills: ['chinese', 'english', 'javascript', 'java']
};
let add = (a, b) => a + b;
console.log(add(99, 27));
let person = {
    name: 'ton',
    age: 12,
    isDeveloper: true
};
let myCar = {
    brand: "kia"
};
const myBook = {
    title: 'typeScript',
    author: 'jane'
};
const myMember = {
    name: "myTeam",
    books: {
        title: 'typeScript2',
        author: 'jomim'
    }
};
class Duck {
    fly() {
        console.log("duck can fly");
    }
    swim() {
        console.log("duck can swimming");
    }
}

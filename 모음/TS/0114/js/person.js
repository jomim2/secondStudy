"use strict";
class Person {
    constructor(name) {
        this.name = name;
        //얘고      //얘임
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
const person = new Person('MIMI');
person.walk();

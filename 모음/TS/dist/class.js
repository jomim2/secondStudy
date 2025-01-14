"use strict";
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const little = new Foo('x', 'y', 'z');
console.log(little.x);
// console.log(little.y);
// console.log(little.z);
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y);
        // console.log(this.z);
    }
}

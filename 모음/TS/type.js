"use strict";
function muliply1(x, y) {
    return x * y;
}
const muliply2 = (x, y) => x * y;
console.log(muliply1(10, 2));
console.log(muliply2(10, 3));
console.log(muliply1(2, 1));
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
let c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Green;
console.log(c2);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
let c3 = Color3.Blue;
console.log(c3);
let tuple;
tuple = ['hello', 10];
let notSure = 5;
notSure = 'maybe a string instead';
notSure = false;
function warnUser() {
    console.log("This is my warning message");
}
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
let foo, bar, baz;
foo = 'hello';
bar = 123;
baz = true;

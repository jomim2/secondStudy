"use strict";
const userall2 = {
    name: "Lee",
    age: 28,
    books: [
        { name: "Nanjung", read: ["read"] },
        { name: "Joseon Wangjo Sillok", read: ["read", "delete"] }
    ],
};
const userall3 = {
    name: "hong gill dong",
    age: 35,
    books: [
        { name: "Hong gildong Jeon", read: ["read", "write", "delete"] },
    ],
    since: "2015",
};
function dis1(item) {
    console.log(`Name : ${item.name} , Age : ${item.age}`);
    console.log('Books : ');
    item.books.forEach(data => {
        console.log(`- ${data.name} : ${data.read.join(", ")}`);
    });
}
dis1(userall2);

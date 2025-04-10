const array = [1, 2, 3];

console.log(Symbol.iterator in array);

for (const item of array) {
    console.log(item);
}
const obj = {
    a: 1, b: 2
};

console.log(Symbol.iterator in obj);

// for (const p of obj) {
//     console.log(p)
// }


for (const [key, value] of new Map([['a', '1'], ['b', '2'], ['c', 3]])) {
    console.log(`key : ${key} value : ${value}`);
}

for (const val of new Set([1, 2, 3])) {
    console.log(val);
}
const iterable = [1, 2, 3, 4];
const iterator = iterable[Symbol.iterator]();

for (; ;) {
    const res = iterator.next();
    if (res.done) break;
    console.log(res)
}

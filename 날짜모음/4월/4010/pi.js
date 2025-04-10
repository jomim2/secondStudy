let ameba = 1;
let count = 0;
for (let i = 18; i < 20; i++) {
    count += ameba * 3 ** i;
}
console.log(count);




let generations = [];
generations[1] = 1;

for (let i = 2; i <= 19; i++) {
    generations[i] = generations[i - 1] * 3;
}

let total = 0;
for (let i = 1; i <= 19; i++) {
    total += generations[i];

    if (i >= 3) {
        total -= generations[i - 2];
    }
}

console.log(`19세대에 살아있는 세균 수: ${total}`);

let Arr = [];
let A = 0;
let B = 1;
let sum = 0;

while (true) {
    sum = A + B;
    A = B;
    [B, sum] = [sum, B]
    if (sum > 100) break;
    console.log(sum);
}


const B = [
    [1, 0, 2],
    [9, 3, 8],
    [4, 7, 5]
];
const C = [
    [0, 6, 1],
    [3, 5, 2]
];

let resultA = [];

for (let i = 0; i < C.length; i++) {
    resultA[i] = [];
    for (let j = 0; j < B[i].length; j++) {
        resultA[i][j] = [];
        let tempA = [];
        for (let k = 0; k < C.length; k++) {
        tempA[i] = (C[i][k] * B[k][j]);
        resultA[i][j] = tempA[i];
        }
    }
}
console.log(resultA);
const A = 
[
    [2,1,4,0],
    [-7,3,6,1],
    [8,-4,-2,3],
    [1,9,4,-2]
];
const B = [
    [7,-1,2,4],
    [2,8,-5,1],
    [-3,-4,2,-2],
    [9,6,-2,0]
];
let resultA = [];
for(let i=0; i<A.length; i++){
    resultA[i] = [];
    for(let j=0; j<A[i].length; j++){
        resultA[i][j] =B[i][j] - A[i][j]  ;
    }
}
console.log(resultA);
const myA =[
    [10,20,30],
    [40,50,60],
    [70,80,90]
];
let tempA =[];
for(let i=0; i<myA.length; i++){
    for(let j=0; j<myA.length; j++){
        for(let k=0; k<myA.length; k++){
            tempA.push([myA[0][i], myA[1][j], myA[2][k]]);
        }
    }
}
console.log(tempA);
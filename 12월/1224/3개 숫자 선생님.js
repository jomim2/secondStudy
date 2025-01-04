let v1 = 1000;
let v2 = 2004;
let v3 = 1104;

console.log(Math.max(v1 , v2 , v3));
console.log(Math.min(v1 , v2 , v3));

let vList = [v1,v2,v3];
console.log(Math.max(...vList));
console.log(Math.min(...vList));
const a=Symbol();
console.log(a);
// symbol.iterator()?

const myS = "zard";
for(let i=0; i<myS.length; i++){
        console.log(myS[i])
}

const myPointer = myS[Symbol.iterator]();
console.log(myPointer);
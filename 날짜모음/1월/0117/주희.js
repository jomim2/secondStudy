//"python programming" 여기서 a,e,i,o,u 빼고 출력해바

let myS = "python programming";
let tempS = '';
for(let i=0; i<myS.length; i++){    
    if(myS[i]!= "a" && myS[i]!="e" && myS[i]!= "i" && myS[i]!= "o" && myS[i]!= "u" ){
        tempS += myS[i];
    }
}
console.log(tempS);

// let myS = "python programming";
// let nope = ["a","e","i","o","u"];
// let tempS = '';

// for(let i=0; i<myS.length; i++){    
//         if(myS[i]!=nope[i]){
//             tempS += myS[i];
//     }
// }
// console.log(tempS);
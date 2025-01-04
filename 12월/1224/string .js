let myS = "I Love Zard";
let SA = [...myS]; //  이건 정상적인 방법임.

// let mySA = [];
// mySA = myS.split(''); 
// 이렇게 넣는게 되긴 하는데 낱글자를 뽀개는 의미보다는 단어 뽀개는 의미가 더 큼. (야매임) 권장 안함

// let tempS = "";
// 문자열 뒤집기기
// SA.forEach((char)=>{
//     tempS = char + tempS;
// });
tempS = ([...SA])
// let tempSS = tempS[0];
console.log(tempS);
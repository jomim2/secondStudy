const targetStr = 'this is a pen.';
const regexr = /is/ig;

// RegExp 메소드
console.log(regexr.exec(targetStr)); //[ 'is', index: 2, input: 'this is a pen.', groups: undefined ]
console.log(regexr.test(targetStr)); //true

//String 메소드
console.log(targetStr.match(regexr)); //[ 'is', 'is' ]
console.log(targetStr.replace(regexr,"IS"));  //thIS IS a pen.
console.log(targetStr.search(regexr)); //2
console.log(targetStr.split(regexr));//[ 'th', ' ', ' a pen.' ]

console.log("////////////////");

const targetStr2 = "Is this all there is?";
let regexr2 = /is/;
console.log(targetStr2.match(regexr2));

regexr2 = /is/ig;

console.log(targetStr2.match(regexr2));
console.log(targetStr2.match(regexr2).length);
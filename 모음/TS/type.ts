function muliply1(x:number , y:number):number{
    return x*y;
}

const muliply2 = (x: number, y:number):number =>x*y;

console.log(muliply1(10,2));
console.log(muliply2(10,3));

console.log(muliply1(2 , 1));

enum Color1 {Red , Green , Blue};
let c1 : Color1 = Color1.Green;
console.log(c1);

enum Color2 {Red = 1 , Green , Blue};
let c2 : Color2 = Color2.Green;

console.log(c2);

enum Color3 {Red =1 , Green =2, Blue =4};
let c3: Color3 = Color3.Blue;

console.log(c3);

let tuple : [string , number];
tuple = ['hello' , 10];

let notSure : any = 5;
notSure = 'maybe a string instead';
notSure = false;

function warnUser(): void{
    console.log("This is my warning message");
}
function infiniteLoop(): never{
    while(true){}
}
function error(message : string):never{
    throw new Error(message);
}

let foo: string, bar:number , baz : boolean;
foo = 'hello' ;
bar = 123;
baz = true;

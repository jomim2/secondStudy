class Foo2{
    constructor(public x:string){}
}
const foo2 = new Foo2("hello");
console.log(foo2);
console.log(foo2.x);

class BAR{
    constructor(private x:string){}
}
const bar2 = new BAR('hello');
console.log(bar2);
// console.log(bar2.x);
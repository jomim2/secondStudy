export class Person{
    protected name:string;

    constructor(name : string){
        this.name = name;
    }
    sayHello(){
        return "Hello ," + this.name;   
    }
}
const person = new Person("LEE");
// console.log(person.sayHello());
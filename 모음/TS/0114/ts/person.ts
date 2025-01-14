class Person{
    name : string; // 이게
    constructor(name : string){ //얘는
        this.name = name;
        //얘고      //얘임
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
}
const person = new Person('MIMI');
person.walk();
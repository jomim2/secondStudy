interface Todo {
    id: number;
    content : string;
    completed : boolean;
}

let todos : Todo[] = [];

function addTodo(todo:Todo){
    todos = [...todos, todo];
}

const newTodo : Todo = {id:1 , content : 'typeScript' , completed: false};
addTodo(newTodo);

console.log(todos);

interface SquareFunc{
    (num: number) : number;
}
const squareFunc: SquareFunc = function(num: number){
    return num * num;
}

console.log(squareFunc(10));

interface ITodo{
    id: number;
    content : string;
    completed : boolean;
}
class Todo implements ITodo{
    constructor(
        public id: number,
        public content : string,
        public completed : boolean
    ){}
}

const todo = new Todo(1 , 'Typescript', false);
console.log(todo);

interface IPerson{
    name: string;
    sayHello(): void;
}

class Person implements IPerson{
    constructor(public name: string){

    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}
function greeter(person: IPerson): void{
    person.sayHello();
}

const me = new Person('Lee');
greeter(me);

interface IDuck{
    quack():void;
}
class MallardDuck implements IDuck{
    quack(){
        console.log('Quack!')
    }
}
class RedheadDuck{
    quack(){
        console.log('q~uack!');
    }
}
function makeNoise(duck : IDuck):void{
    duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());
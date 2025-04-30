//Type Alias : 다양한 타입 (객체, 함수 , 튜플 모두 지원)
type Age = number;
let myAge: Age = 20;

type St = 'loading' | 'success' | 'error';
// 지정한것만 들어갈 수 있음
let now: St = 'error';
// 안들어가짐
// now = 'hello';

type UserAll3 = {
    name: string;
    age: number;
    skills: string[]
}

let jomimi: UserAll3 = {
    name: "lee",
    age: 28,
    skills: ['chinese', 'english', 'javascript', 'java']
}

type Add = (x: number, y: number) => number;

let add: Add = (a, b) => a + b;
console.log(add(99, 27));

//interface : 객체의 구조를 정의
interface Person {
    name: string;
    age: number;
}
interface Person {
    isDeveloper: boolean;
}
let person: Person = {
    name: 'ton',
    age: 12,
    isDeveloper: true
}

// ? 있어도 되고 없어도 되고~라는 뜻
interface Car {
    brand: string;
    model?: string;
}

let myCar: Car = {
    brand: "kia"
}
interface Car2 extends Car {
    name: string;
}


// readonly 설정했으면 const 느낌임. 한번 들어가면 다시 바꿀수없음.
interface Book {
    readonly title: string;
    author: string;
}
const myBook: Book = {
    title: 'typeScript',
    author: 'jane'
}

//고칠 수 없당
// myBook.title = 'javascript';

interface Member {
    name: string;
    books: Book;
}

const myMember: Member = {
    name: "myTeam",
    books: {
        title: 'typeScript2',
        author: 'jomim'
    }
}


interface Flyer {
    fly(): void;
}

interface Swimmer {
    swim(): void;
}

class Duck implements Flyer, Swimmer {
    fly() {
        console.log("duck can fly")
    }
    swim() {
        console.log("duck can swimming")
    }
}
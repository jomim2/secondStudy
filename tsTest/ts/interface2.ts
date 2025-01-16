interface IPerson{
    name: string;
}
function sayHello(person:IPerson): void{
    console.log(`hello ${person.name}`);
}

const me = {name : 'lee' , age :18};
sayHello(me);

interface UserInfo{
    username : string;
    password : string;
    age? : number;
    address? : string;
}
const userInfo: UserInfo = {
    username: 'ungmo2@gmail.com',
    password : '12345',
}

console.log(userInfo);

interface Person{
    name: string;
    age? : number;
}
interface Student extends Person{
    grade: number;
}
const student: Student = {
    name:'Lee',
    age : 20,
    grade : 3
}
interface Developer{
    skills : string[];
}

interface WebDeveloper extends Person , Developer{}

const webDeveloper : WebDeveloper = {
    name : 'lee',
    age : 20,
    skills : ['HTML','CSS','JavaScript']
}
export {};
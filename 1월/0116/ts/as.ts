interface Person {
    name: string,
    age: number
}

const person = {} as Person;
person.name = "lee";
person.age = 20;
// person.address = 'Seoul';

type Person2 = {
    name: string,
    age?: number
}
const person2 = {} as Person2;
person2.name = 'lee';
person2.age = 20;
// person2.address = 'Seoul';

type Str = 'lee';
type Union = string | null;
type Name = 'Lee' | 'Kim';
type Num = 1 | 2 | 3 | 4 | 5;

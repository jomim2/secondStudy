interface names {
    name: string;
    read: string[];
}
interface UserAll {
    name: string;
    age: number;
    books: names[];
    since?: string;
}

const userall: UserAll = {
    name: "Lee",
    age: 28,
    books: [
        { name: "Nanjung", read: ["read"] },
        { name: "Joseon Wangjo Sillok", read: ["read", "delete"] }
    ],
}

const userall1: UserAll = {
    name: "hong gill dong",
    age: 35,
    books: [
        { name: "Hong gildong Jeon", read: ["read", "write", "delete"] },
    ],
    since: "2015",
}

class AutoPrint {
    id: string;
    person1 = userall;
    person2 = userall1;
    constructor(id: string) {
        this.id = id;
    }

    printPerson(person: any) {
        console.log(
            `
            Name : ${person.name} , Age : ${person.age} ${person.since ? "since : " + person.since : ""}
            Books:
            ${person.books
                .map((v: any) => `- ${v.name} : ${v.read.join(", ")}`)
                .join("\n")}
            
            --------------------------------------
            `
        );
    }
    run() {
        this.printPerson(this.person1);
        console.log(this.person1.books[0].name)

        this.printPerson(this.person2);
    }
}

const autoPrint = new AutoPrint("personArea");
autoPrint.run();


// const autoPrint = () =>{

// }

// for (let key in userall) {
//     console.log(upperFirst(key) + ":");
//     if (Array.isArray(userall[key])) {
//         userall[key].forEach((v: string, i: number) => {
//             console.log("-" + v.name)
//         });
//     }
// }




// interface Book {
//     name: string;
//     read: string[];
// }
// interface Person {
//     Name: string;
//     Age: number;
//     Books: Book[];
//     since?: string;
// }

// const personSet: Person[] = [
//     {
//         Name: "Lee sun sin",
//         Age: 28,
//         Books: [
//             { name: "난중일기", read: ["read"] },
//             { name: "조선왕조실록", read: ["read", "delete"] },
//         ]
//     },
//     {
//         Name: "Hong gil dong",
//         Age: 35,
//         Books: [
//             { name: "홍길동전", read: ["read", "write", "delete"] },
//         ],
//         since: "2015"
//     },
// ];

// personSet.forEach((person) => {
//     console.log(
//         `
// Name: ${person.Name}
// Age: ${person.Age}
// Books:
// ${person.Books.reduce((acc, cur) => {
//             return acc + `- ${cur.name}: ${cur.read.join(", ")}`;
//         }, "")}
//         `.trim()
//     )
// });

// let a = [5, 2, 3, 100, 200];
// console.log(a.reduce((acc, cur,) => { return acc + cur }) / a.length);
// console.log(a.reduce((acc, cur) => { return acc + cur + " " }, ""));

// const b = [5, 5, 5];
// console.log(
//     b.every((v) => {
//         return v === 5;
//     }))
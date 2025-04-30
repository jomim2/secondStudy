const names: string = 'go domg';
const age: number = 30;
const isDeveloper: boolean = true;
const skill: string[] = ['javaScript', 'TypeScript'];

const mixed: (number | string)[] = [123, 'hello', 123, 123, 'hello', 'hello'];

const user1: { name: string, age: number } = { name: 'hong', age: 20 };


let random: any = 123;
random = 'hello';
console.log(random.toUpperCase());

let random2: unknown = 123
random2 = 'hello';
if (typeof (random2) === 'string') {
    console.log(random2.toUpperCase())
}

//리턴값이 없는 친구 void
function greet(): void {
    console.log("void hello");
}
greet();


function greet1(item: number): string {
    return item % 2 ? 'odd' : 'even';
}

console.log(greet1(11));


//배열로 어떤 값을 떤지 그 값의 평균을 돌려주기
function avg1(item: number[]): number {
    let tot = 0;
    for (const score of item) {
        tot += score;
    }
    return tot / item.length;
}
console.log(avg1([1, 2, 3, 4, 5]));



// string 을 넣으면 null 을 넣을 수 없음. 따라서 나중에 string 이 올거지만 일단 null 을 넣기 위해서 
let userId: string | null = null;
userId = "korea";

function greet2(name?: string) {
    if (name === undefined) {
        console.log("hi")
    } else {
        console.log(`hello ${name}`)
    }
}

greet2();
greet2("sunsin")
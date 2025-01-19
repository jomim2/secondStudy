class Queue<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}
const numberQueue = new Queue<number>();

numberQueue.push(0);
numberQueue.push(+'1');

console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());

const stringQueue = new Queue<string>();

stringQueue.push('hello');
stringQueue.push('World');
console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());

const myQueue = new Queue<{ name: string, age: number }>();
myQueue.push({ name: 'lee', age: 10 })
myQueue.push({ name: 'Kim', age: 20 });

console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
export{};
function reverse<T>(items:T[]) : T[]{
    return items.reverse();
}

const arg = [{name:'lee' } , {name: 'kim'}];

const reversed = reverse(arg);
console.log(reversed);
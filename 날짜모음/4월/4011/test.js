const myF = () => {
    let a = 1;
    let b = 2;
    return { a, b };
}

let { a, b } = myF();
console.log(a, "/", b); 
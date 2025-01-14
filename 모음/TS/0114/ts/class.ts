class Foo{
    public x: string;
    protected y: string;
    private z: string;
    constructor(x: string , y: string , z: string){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const little = new Foo('x','y','z');

console.log(little.x);
// console.log(little.y);
// console.log(little.z);

class Bar extends Foo{
    constructor(x: string , y: string, z: string){
        super(x,y,z);
        console.log(this.x);
        console.log(this.y);
        // console.log(this.z);
    }
}
class Foo5{
    private readonly MAX_LEN : number = 5;
    private readonly MSG :string;
    constructor(){
        this.MSG ='hello';
    }
    log(){
        // this.MAX_LEN = 10;
        // this,MSG = 'hi?';
        console.log(`MAX_LEN : ${this.MAX_LEN}`);
    }
}
new Foo5().log();
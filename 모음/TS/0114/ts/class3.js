"use strict";
class Foo5 {
    constructor() {
        this.MAX_LEN = 5;
        this.MSG = 'hello';
    }
    log() {
        // this.MAX_LEN = 10;
        // this,MSG = 'hi?';
        console.log(`MAX_LEN : ${this.MAX_LEN}`);
    }
}
new Foo5().log();

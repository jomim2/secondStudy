var Foo5 = /** @class */ (function () {
    function Foo5() {
        this.MAX_LEN = 5;
        this.MSG = 'hello';
    }
    Foo5.prototype.log = function () {
        // this.MAX_LEN = 10;
        // this,MSG = 'hi?';
        console.log("MAX_LEN : " + this.MAX_LEN);
    };
    return Foo5;
}());
new Foo5().log();

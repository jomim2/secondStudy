class Pal{
    id :string;
    str :string;
    result : string;
    constructor(id:string){
        this.id = id;
        this.str = '';
        this.result = '';
    }
    getValue(){
        this.str = String(prompt("문자열입력"));
        for(let i=0; i<this.str.length; i++){
            this.result = this.str[i] + this.result;
        }
        console.log(this.result);
        this.display();
    }
    display(){
        if(this.result === this.str){
            document.write("palindrome");
        }else{
            document.write("not palindrome");
        }
    }
    run(){
        this.getValue();
    }
}
const pal = new Pal('pal');
pal.run();
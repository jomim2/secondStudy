class Canvas{
    can : any;
    pen : any;
    id : string;
    scale : number;
    constructor(id:string){
        this.id = id;
        this.can = document.getElementById("can");
        this.pen = this.can.getContext("2d");
        this.scale = 15;
    }
    printDot(x:number , y:number ){
        this.pen.fillRect(this.can.width/2 + x * this.scale,this.can.height/2-y * this.scale,1,1);
    }
    printScale(){
        for(let i=-this.can.width/2; i<=this.can.width/2; i+=0.01){
            this.printDot(i ,0);
            this.printDot(0, i);
        }
        for(let i=0; i<=this.can.width/2; i+=this.scale){
            for(let j=-5; j<=5; j+=0.01){
                this.pen.fillRect(this.can.width/2+i,this.can.height/2-j,1,1);
                this.pen.fillRect(this.can.width/2+j,this.can.height/2-i,1,1);
                this.pen.fillRect(this.can.width/2-i,this.can.height/2-j,1,1);
                this.pen.fillRect(this.can.width/2+j,this.can.height/2+i,1,1);
            }
        }
        this.printDot(1,1);
    }
    printLine(x1:any,y1:any,x2:any,y2:any){
        let gi = (y1 - y2 / x1 - x2);
        console.log(gi);
        for(let x=x1; x<=x2; x++){
            let y = gi *(x1 -x) + y2;
            this.printDot(x,y);
        }
    }
    btnControl(){
        document.getElementById("btn")?.addEventListener("click",(e)=>{
            let x1 = (document.getElementById('x1') as HTMLInputElement).value;
            let y1 = (document.getElementById('y1') as HTMLInputElement).value;
            let x2 = (document.getElementById('x2') as HTMLInputElement).value;
            let y2 = (document.getElementById('y2') as HTMLInputElement).value;
            let x3 = (document.getElementById('x3') as HTMLInputElement).value;
            let y3 = (document.getElementById('y3') as HTMLInputElement).value;
            
            this.printLine(x1,y1,x2,y2);
            // if (x1 > x2) {
            //     [x1, x2] = [x2, x1];
            //     [y1, y2] = [y2, y1];
            // }
            // this.printLine(x1, y1, x2, y2);
            // if (x2 > x3) {
            //     [x2, x3] = [x3, x2];
            //     [y2, y3] = [y3, y2];
            // }
            // this.printLine(x2, y2, x3, y3);

            // if (x1 > x3) {
            //     [x1, x3] = [x3, x1];
            //     [y1, y3] = [y3, y1];
            // }
            // this.printLine(x1, y1, x3, y3);
        });
    }
    run(){
        this.btnControl();
        this.printScale();
    }
}
const canvas = new Canvas('canvas');
canvas.run();

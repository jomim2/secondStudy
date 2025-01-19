class KarMap {
    id: string;
    divBox: any;
    karMapV: any;
    constructor(id: string) {
        this.id = id;
        this.divBox = [];
        this.karMapV =
            [[0], [0]], // 0
            [[0], [0]]  // 1
            ;
    }
    display() {
        // alert("1")
        let box = document.getElementById("box") as HTMLElement;
        for (let i = 0; i < 4; i++) {
            this.divBox[i] = (`<div class="clickArea" id="box_${i}"></div>`);
            box.innerHTML += this.divBox[i];
        }
        for (let i = 0; i < 4; i++) {
            document.getElementById(`box_${i}`)?.addEventListener("click", () => {
                // alert(1);
                document.getElementById(`box_${i}`)?.classList.toggle("clickOK");
            });
        }
    }
    valueControl() {
        let btn = document.getElementById("btn") as HTMLElement;
        btn.addEventListener("click", () => {
            // alert(1);
            let resultS = '';

            console.log(this.divBox);
            this.divBox.forEach((v: any, i: number) => {
                if (document.getElementById(`box_${i}`)?.classList.contains("clickOK")) {
                    if( i <= 1){
                        this.karMapV[0][i] = 1;
                    }else{
                        this.karMapV[1][i%2] = 1;
                    }
                }else{
                    if( i <= 1){
                        this.karMapV[0][i] = 0;
                    }else{
                        this.karMapV[1][i%2] = 0;
                    }
                }
                
            });
            for(let i=0; i<2; i++){
                if(this.karMapV[0][i] == 1 && this.karMapV[1][i%2] == 1){
                    if(this.karMapV[0][0] == 1){
                        resultS += "x'";
                    }else{
                        resultS += "x";
                    }
                }
                if(this.karMapV[i][0] == 1 && this.karMapV[i][1] ==1){
                    if(this.karMapV[0][0] == 1 &&  this.karMapV[0][1] == 1){
                        resultS += "y'";
                    }
                    else{
                        resultS += 'y';
                    }
                }
                if(this.karMapV[i][0] === 1 && this.karMapV[i+1]?.[0] ===1){
                    
                }
            }
            // console.log(this.karMapV);   
            console.log(resultS);
        })
    }
    run() {
        this.display();
        this.valueControl();
    }
}
const map = new KarMap("map");
map.run();
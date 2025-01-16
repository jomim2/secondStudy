"use strict";
class Trans {
    constructor(id) {
        this.id = id;
        this.arr = [
            [5, 6, 7],
            [8, 9, 10],
            [11, 12, 13],
            [14, 15, 16],
        ];
    }
    display() {
        let beforeArea = document.getElementById("beforeArea");
        this.arr.forEach((v, i, a) => {
            beforeArea.innerHTML += a[i] + "<br>";
        });
        console.log(this.arr);
        let btn = document.getElementById("btn");
        btn.addEventListener("click", () => {
            // alert(1);
            this.displayArray();
        });
    }
    displayArray() {
        let tempA = [];
        for (let i = 0; i < this.arr[0].length; i++) {
            tempA[i] = [];
            for (let j = 0; j < this.arr.length; j++) {
                tempA[i].push(this.arr[j][i]);
            }
        }
        let tsArea = document.getElementById("tsArea");
        tempA.forEach((v, i, a) => {
            tsArea.innerHTML += a[i] + "<br>";
        });
    }
    run() {
        this.display();
        // alert(1);
    }
}
const trans = new Trans("trans");
trans.run();

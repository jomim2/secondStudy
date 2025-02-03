"use strict";
class Bul {
    constructor(id) {
        this.id = id;
        this.A1 = [
            [1, 0, 0],
            [1, 1, 1]
        ];
        this.A2 = [
            [0, 1],
            [1, 1],
            [1, 0]
        ];
        this.result = [[]];
    }
    multi() {
        for (let i = 0; i < this.A2.length; i++) {
            this.result[i] = [];
            for (let j = 0; j < this.A1[i].length; j++) {
                this.result[i][j] = [];
                let tempA = [];
                for (let k = 0; k < this.A2.length; k++) {
                    tempA[i] = (this.A2[i][k] * this.A1[k][j]);
                    this.result[i][j] = tempA[i];
                }
            }
        }
        console.log(this.result);
    }
}
const bul = new Bul("bul");
bul.multi();

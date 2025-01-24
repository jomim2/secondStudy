"use strict";
class CanI {
    constructor(id) {
        this.id = id;
        this.A = [[3, -1, -2],
            [-4, 2, 1],
            [1, 4, -3]];
        this.B = [];
        this.C = [...this.A];
        this.R = 0;
    }
    pushB() {
        for (let i = 0; i < this.A.length; i++) {
            this.B[i] = [];
            for (let j = 0; j < this.A[i].length - 1; j++) {
                this.B[i][j] = this.A[i][j];
            }
        }
        console.log(this.B);
        for (let i = 0; i < this.A.length; i++) {
            for (let j = 0; j < this.A[i].length; j++) {
                this.R += this.A[0][0] * this.A[1][1] * this.A[2][2] - this.A[0][2] * this.A[1][1] * this.A[2][0];
            }
        }
    }
}
const canI = new CanI("canI");
canI.pushB();

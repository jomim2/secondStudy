"use strict";
class KarMap {
    constructor(id) {
        this.id = id;
        this.divBox = [];
        this.karMapV =
            [[0], [0]], // 0
            [[0], [0]] // 1
        ;
    }
    display() {
        var _a;
        // alert("1")
        let box = document.getElementById("box");
        for (let i = 0; i < 4; i++) {
            this.divBox[i] = (`<div class="clickArea" id="box_${i}"></div>`);
            box.innerHTML += this.divBox[i];
        }
        for (let i = 0; i < 4; i++) {
            (_a = document.getElementById(`box_${i}`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                var _a;
                // alert(1);
                (_a = document.getElementById(`box_${i}`)) === null || _a === void 0 ? void 0 : _a.classList.toggle("clickOK");
            });
        }
    }
    valueControl() {
        let btn = document.getElementById("btn");
        btn.addEventListener("click", () => {
            var _a;
            // alert(1);
            let resultS = '';
            console.log(this.divBox);
            this.divBox.forEach((v, i) => {
                var _a;
                if ((_a = document.getElementById(`box_${i}`)) === null || _a === void 0 ? void 0 : _a.classList.contains("clickOK")) {
                    if (i <= 1) {
                        this.karMapV[0][i] = 1;
                    }
                    else {
                        this.karMapV[1][i % 2] = 1;
                    }
                }
                else {
                    if (i <= 1) {
                        this.karMapV[0][i] = 0;
                    }
                    else {
                        this.karMapV[1][i % 2] = 0;
                    }
                }
            });
            for (let i = 0; i < 2; i++) {
                if (this.karMapV[0][i] == 1 && this.karMapV[1][i % 2] == 1) {
                    if (this.karMapV[0][0] == 1) {
                        resultS += "x'";
                    }
                    else {
                        resultS += "x";
                    }
                }
                if (this.karMapV[i][0] == 1 && this.karMapV[i][1] == 1) {
                    if (this.karMapV[0][0] == 1 && this.karMapV[0][1] == 1) {
                        resultS += "y'";
                    }
                    else {
                        resultS += 'y';
                    }
                }
                if (this.karMapV[i][0] === 1 && ((_a = this.karMapV[i + 1]) === null || _a === void 0 ? void 0 : _a[0]) === 1) {
                }
            }
            // console.log(this.karMapV);   
            console.log(resultS);
        });
    }
    run() {
        this.display();
        this.valueControl();
    }
}
const map = new KarMap("map");
map.run();

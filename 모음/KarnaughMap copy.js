"use strict";
class KarnaughMap {
    constructor(id, num, remV, position) {
        this.id = id;
        this.navBox = [];
        this.KarMapV = [];
        this.num = num;
        this.remV = remV;
        this.position = position;
    }
    display() {
        let navArea = document.getElementById("navArea");
        const navE = document.createElement("nav");
        navE.setAttribute("class", "navigation5");
        // navArea.innerHTML = `<nav class="navigation5">`;
        // for (let i = 1; i <= this.num; i++) {
        //     console.log(i);
        //     let tempS = [];
        //     this.navBox[i] = '';
        //     for (let j = -1; j <= this.num; j++) {
        //         let randomNumber = Math.floor(Math.random() * 9) + 1;
        //         tempS[j + 2] = `<span id=${i}  style="--i:${randomNumber};--x:${this.position + j - 1};--y:${this.remV * 2 - i - this.position * 2}; width:calc(100% / ${this.num + 2}); height:calc(100% / ${this.num + 2}); transform: translate(calc(${this.remV}rem * var(--x)), calc(${this.remV}rem * var(--y)));">${i}</span>`;
        //         this.navBox[i] += [tempS[j]];
        //     }
        // }
        // for (let i = 1; i < this.navBox.length; i++) {
        //     console.log(this.navBox);
        //     navE.innerHTML += (this.navBox[i]);
        //     console.log(this.navBox[i])
        // }
        console.log(this.navBox);
        navArea.appendChild(navE);
        // navArea.innerHTML += `</nav>`;
        // let box = document.getElementById("navArea") as HTMLElement;
        // for (let i = 0; i < 4; i++) {
        //     this.navBox[i] = (`<div class="clickArea" id="box_${i}"></div>`);
        //     box.innerHTML += this.navBox[i];
        // }
    }
    addClass() {
        // let xbtn = document.getElementById("xbtn") as any;
        let navigation = document.querySelectorAll('.navigation5');
        navigation.forEach((v) => {
            v.addEventListener("click", () => {
                v.classList.toggle('active');
                // xbtn.style.opacity = "1";
            });
        });
        // xbtn.addEventListener("click", () => {
        //     navigation.classList.remove('active');
        //     xbtn.style.opacity = "0";
        //     console.log(navigation);
        //     console.log(navigation.classList);
        // });
    }
}
const karMap2 = new KarnaughMap('karMap2', 5, 1.5, 0);
const karMap1 = new KarnaughMap('karMap1', 3, 2, 1);
const karMap3 = new KarnaughMap('karMap2', 6, 1.3, -0.5);
karMap1.display();
karMap2.display();
karMap3.display();
karMap1.addClass();

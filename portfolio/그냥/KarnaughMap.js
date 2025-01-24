"use strict";
class KarnaughMap {
    constructor(id, infoString) {
        this.id = id;
        this.navBox = [];
        this.KarMapV = [];
        this.infoString = infoString;
    }
    display() {
        let navArea = document.getElementById("navArea");
        const navE = document.createElement("nav");
        navE.setAttribute("class", "navigation5");
        navE.setAttribute("id", `${this.id}`);
        console.log(this.navBox);
        navArea.appendChild(navE);
        let box = document.getElementById(`${this.id}`);
        box.innerHTML = this.infoString;
    }
    addClass() {
        let navigation = document.querySelectorAll('.navigation5');
        navigation.forEach((v) => {
            v.addEventListener("click", () => {
                v.classList.toggle('active');
                // xbtn.style.opacity = "1";
            });
        });
    }
    run() {
        this.display();
        this.addClass();
    }
}
const karMap1 = new KarnaughMap('karMap1', '2변수');
const karMap2 = new KarnaughMap('karMap2', '3변수');
const karMap3 = new KarnaughMap('karMap3', '4변수');
karMap1.display();
karMap2.display();
karMap3.display();
karMap1.addClass();

class KarnaughMap {
    id: string;
    navBox: any;
    KarMapV: number[][];
    infoString: string;
    constructor(id: string, infoString: string) {
        this.id = id;
        this.navBox = [];
        this.KarMapV = [];
        this.infoString = infoString;
    }
    display() {
        let navArea = document.getElementById("navArea") as HTMLElement;
        const navE = document.createElement("nav");
        navE.setAttribute("class", "navigation5");
        navE.setAttribute("id", `${this.id}`);
        console.log(this.navBox);
        navArea.appendChild(navE);
        let box = document.getElementById(`${this.id}`) as any;
        box.innerHTML = this.infoString;

    }
    addClass() {
        let navigation = document.querySelectorAll('.navigation5') as any;
        navigation.forEach((v: any) => {
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

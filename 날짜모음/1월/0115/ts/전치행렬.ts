class Trans {
  public arr: any;
  public id: string;
  constructor(id: string) {
    this.id = id;
    this.arr = [
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
      [14, 15, 16],
    ];
  }
  display() {
    let beforeArea =  document.getElementById("beforeArea") as HTMLElement;
    this.arr.forEach((v:number,i:number,a:any)=>{
        beforeArea.innerHTML += a[i] + "<br>";
    });
    console.log(this.arr);
    let btn = document.getElementById("btn") as HTMLElement;
    btn.addEventListener("click", () => {
        // alert(1);
      this.displayArray();
    });
  }
  displayArray() {
    let tempA: any[] = [];
    for (let i = 0; i < this.arr[0].length; i++) {
      tempA[i] = [];
      for (let j = 0; j < this.arr.length; j++) {
        tempA[i].push(this.arr[j][i]);
      }
    }
    let tsArea = document.getElementById("tsArea") as HTMLElement;
    tempA.forEach((v:number , i:number, a:any)=>{
        tsArea.innerHTML += a[i] + "<br>";
    });
  }
  run(){
    this.display();
    // alert(1);
  }
}
const trans = new Trans("trans");
trans.run();



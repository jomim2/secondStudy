// * => 논리곱
// + => 논리합
// ' => 보수
// let x: boolean = true;
// let y: boolean = true;
// let z: boolean = true;
// console.log(x && y ? "1":"0"); // 논리 곱

// console.log(x || y ? "1":"0"); // 논리 합

// console.log(!x ? "1" : "0") // 역 구하기~

// const logicAdd = (x: boolean, y: boolean, z: boolean) => {
//   return x || (!x && y && z) || (!y && !z);
// };

// console.log(logicAdd(false,false,false));

class Bool {
  public id: string;
  constructor(id: string) {
    this.id = id;
  }
logicAdd(x: boolean, y: boolean, z: boolean) {
    return x || (!x && y && z) || (!y && !z) ? "1" : "0";
}
consoleParty() {
    const myA: any = {
    x: [true, false],
    y: [true, false],
    z: [true, false],
    };
    // let tempA: any[][] = [];
    // console.log(myA['x']);
    for (let i = 0; i < myA["x"].length; i++) {
        for (let j = 0; j < myA["y"].length; j++) {
            for (let k = 0; k < myA["z"].length; k++) {
            console.log(this.logicAdd(myA["x"][i], myA["y"][j], myA["z"][k]));
            }
        }
    }

}
}
const bool = new Bool("bool");
bool.consoleParty();

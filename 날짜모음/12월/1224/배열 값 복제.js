let myV1 = [100, 200, 300, 400];
let myV2 = [...myV1];

// 객체 복제하기
let myO = { name: "zard", gender: [1004, 1005], aaa: { aaa: "1008", bbb: "1108" } }
let myO2 = { ...myO };

console.log(myO2);
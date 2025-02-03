const testS = `
<h2>Welcome to my Homepage</h1>`;
const Reg = /<[hH]([1-6])>.*?<\/[Hh]\1>/;

console.log(Reg.test(testS));
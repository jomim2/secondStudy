const testS = '!!!!!!!!!!';
const reg = /[\w*(@#\$!)+(A-Z)+]{8,15}/;
///[\d\w(@#\$!)?(0-9)?]{8,15}/;
console.log(reg.test(testS));
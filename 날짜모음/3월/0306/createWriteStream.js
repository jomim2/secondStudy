const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', () => {
    console.log('파일쓰기 완료');
});
writeStream.write('이 글을 씁니다.');

writeStream.write('항번 더~');

writeStream.end();
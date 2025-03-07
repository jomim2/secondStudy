const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 100 });
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log(chunk, chunk.length);
});

readStream.on('end', () => {
    console.log(Buffer.concat(data).toString());
});


readStream.on('err', (err) => {
    console.log(err);
})
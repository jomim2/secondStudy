const fs = require('fs');
const os = require('os');
const express = require('express');
const app = express();
const path = require('path');
const nowMem = () => {
    fs.writeFile('./mem.json', ` {"freemem" : ${os.freemem()} , "totalmem" : ${os.totalmem()}}`, (err) => {
        if (err) {
            throw err;
        }
    });
    app.get('/mem', (req, res) => {
        fs.readFile('./mem.json', (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data.toString());
            res.sendFile(path.join(__dirname, './mem.html'));
        });
    });
    setTimeout(nowMem, 2000);
}
nowMem();

app.listen(2000, () => {
    console.log("2000 post is ready")
});


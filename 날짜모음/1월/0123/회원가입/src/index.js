const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');
const bp = require("body-parser");
// const joinRouter = require('./html/join.html');

app.get('/join', (req, res) => {
    res.sendFile(path.join(__dirname, "./html", 'join.html'));
});


app.get('/login', (req, res) => {
    console.log(req.query.name);
    console.log(req.query.pass);
    const userInfo = JSON.stringify({
        id: 2,
        userId: req.query.name,
        userPwd: req.query.pass
    });
    const filePath = path.join(__dirname, './json/userInfo.json');
    if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    fs.writeFile(filePath, userInfo, (err) => {
        if (err) {
            throw err;
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data.toString());
        });
    });

    res.sendFile(path.join(__dirname, "./html", 'join.html'));
});
app.listen(3000, () => {
    console.log("3000 port is ready");
})
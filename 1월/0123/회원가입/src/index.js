const fs = require('fs');
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./pug");
app.get("/join", (req, res) => {
    res.sendFile(path.join(__dirname, "./html", "join.html"));
});
app.post("/login", (req, res) => {
    const { name } = req.body;
    const {pass} = req.body;
    const jsonData = JSON.stringify({id:1 , userId : name , userPass : pass});
    fs.writeFile(path.join(__dirname ,"./json" , "user.json"), jsonData ,(err)=>{
        if(err){
            throw err
        }
    })
    res.send(`${name}님 환영합니다.`);
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./html", "join.html"));
});

app.listen(3000, () => {
    console.log("3000 port is ready");
});
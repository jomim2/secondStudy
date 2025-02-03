let ws = require("express");
let bodyParser = require("body-parser");
app.use(es.static("myFiles"));
let app = ws();
app.use(ws.json());
app.use(bodyParser.json());
// app.use(bodyParser().json);


app.get('/',(req,res)=>{
    res.send("hello mimi?");
});
app.get

app.listen(2000,()=>{
    console.log("2000 port readyyyy")
});
const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const zardRouter = require('./routes/zard')
const { copyFileSync } = require("fs");

app.use('/',indexRouter);
app.use('/user',userRouter);
app.use('/zard',zardRouter);
app.use((req,res,next)=>{
    res.status(404).send("Not Found");
});

app.listen(3000,()=>{
    console.log("3000 is ready");
});
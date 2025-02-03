let express = require("express");
let app = express();
app.locals.pretty = true;
app.set('view engine' , 'pug');
app.set('views' , './views');
app.use(express.static('public'));
app.get('/template',(req,res)=>{
    res.render('temp',{time : Date() , title : 'Jade'});
});

app.get('/',(req,res)=>{
    res.send("hello home page");
});

app.listen(2000,()=>{
    console.log("2000 is ready!");
})
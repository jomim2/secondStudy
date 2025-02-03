class WebService {
    constructor(id) {
        this.id = id;
        this.express = require("express");
        this.app = this.express();
        this.bodyParser = require("body-parser");
    }
    init() {
        this.app.use(this.bodyParser.urlencoded({ extended: false }));
        this.app.use(this.express.static("assets"));
    }
    routes() {
        this.app.get("/", (req, res) => {
            console.log(`${req.query.select}`);
            res.send(`${req.query.select}`);
        });

        this.app.post("/login/", (req, res) => {
            console.log(`${req.body.id} : ${req.body.pw}`);
        });

        this.app.get('/images', (req, res) => {
            res.send(`<img src="1.jpg">`);
        });

        this.app.get("/join/", (req, res) => {
            let htmlString = '';
            for (let i = 0; i < 5; i++) {
                htmlString += `<img src="myImages${i}">`;
            }
            res.send(htmlString);
        });
        this.app.listen(3000,()=>{
            console.log("3000 port is Ready");
        })
    }
    startService(){
        this.init();
        this.routes();
    }
}
const myApp = new WebService('myApp');
myApp.startService();




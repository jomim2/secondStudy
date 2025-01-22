class WebService {
    constructor(id) {
        this.id = id;
        this.express = require("express");
        this.bodyParser = require("body-parser");
        this.this.app = express();
    }
    init() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static("assets"));
    }
    routes() {
        this.app.get("/", (req, res) => {
            console.log(`${req.query.select}`);
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
    }
    startService(){
        this.init();
        this.routes();
    }
}
const myApp = new WebService('myApp');
myApp.startService();




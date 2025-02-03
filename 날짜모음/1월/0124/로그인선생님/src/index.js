// const expressObject = require('express');
// const loginApp = expressObject();

/**
 * loginApp
 * 2025/01/24 MKJ
 */
class LoginApp {
    constructor(id) {
        this.id = id;
    }
    run() {

    }
}
const login1 = new LoginApp('login1');
login1.run();

const config = require("./config/config.js");
const createExp = require("./modules/expressObj");
const loginApp = createExp("loginApp");
const bodyParser = require("body-parser");
//Environment 환경변수
loginApp.use(bodyParser.urlencoded({ extended: false }));
// pathInfo
const routeHome = require("./pathInfo/routeHome.js");
const routeJoin = require("./pathInfo/routeJoin.js");
const routeCreateUser = require("./pathInfo/routeCreateUser.js");
const routeLogin = require("./pathInfo/routeLogin");


loginApp.route("/").get((req, res) => { routeHome(req, res); });
loginApp.route("/join").get((req, res) => { routeJoin(req, res); });
loginApp.route("/createUser").post((req, res) => { routeCreateUser(req, res); })
loginApp.route("/login").get((req, res) => { routeLogin(req, res); })

loginApp.listen(config.port, config.hostname, () => {
    console.log(`Service Open! ${config.port}`);
    //console.log(__dirname);
});

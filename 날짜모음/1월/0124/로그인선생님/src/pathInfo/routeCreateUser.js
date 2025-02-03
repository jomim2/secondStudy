const routeCreateUser = (req, res) => {
    const fs = require("fs");
    const path = require("path");
    const fileIO = require("../modules/fileIO");
    // interface 개념임!
    let user = require("../config/user"); 
    let fileConf = require("../config/fileConf");

    user.id = req.body.inID;
    user.pw = req.body.inPW;
    fileConf.fileMode = "w";
    fileConf.filePath = path.join(__dirname, "../assets/jsons/userList.json");
    fileConf.fileData =  JSON.stringify(user);
    fileIO(fileConf);
    res.redirect("/login");
}

module.exports = routeCreateUser;
const express = require("express");
const path = require("path");
// const morgan = require("morgan");
const nunjucks = require("nunjucks");
const fs = require("fs");
// const { sequelize } = require("../models/index");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
    watch: true
});

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log("!!! Database connected");
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// morgan 설정 (파일로 저장)
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));


app.get("/", (req, res) => {
    res.render("main");
});

// app.use((req, res, next) => {
//     const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//     error.status = 404;
//     next(error);
// });

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
//     res.status(err.status || 500);
//     res.render("error");
// });

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중");
});
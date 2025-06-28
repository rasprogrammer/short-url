const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

const mongoDbConnect = require("./connection");

mongoDbConnect("mongodb://127.0.0.1:27017/short-url");

const urlRouter = require("./routes/urlRouter");
const staticRouter = require("./routes/staticRouter");

app.use('/url', urlRouter);

app.use('/', staticRouter);


app.listen(port, () => console.log('Server started!'));
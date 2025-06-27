const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const mongoDbConnect = require("./connection");

mongoDbConnect("mongodb://127.0.0.1:27017/short-url");

const urlRouter = require("./routes/urlRouter");

app.use('/url', urlRouter);


app.listen(port, () => console.log('Server started!'));
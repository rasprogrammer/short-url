require("dotenv").config();

import express from "express";
import { mongoDbConnect } from "./src/db";
// import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoDbConnect(process.env.DATABASE_URL);

import urlRouter from "./src/routes/url.routes";
import staticRouter from "./routes/staticRouter";


app.use('/api/v1/urls', urlRouter);

app.use('/', staticRouter);


app.listen(port, () => console.log('Server started!'));
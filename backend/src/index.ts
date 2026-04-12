import { config } from "dotenv";
config();

import express from "express";
import { mongoDbConnect } from "./db.js";
// import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoDbConnect(process.env.DATABASE_URL!);

import urlRouter from "./routes/url.routes.js";
import authRouter from "./routes/auth.routes.js";


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/urls', urlRouter);


app.listen(port, () => console.log('Server started!'));
import express from "express";
import Connection from "./database/db.js";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from 'dotenv';
import { USERNAME, PASSWORD } from "./secrets.js";


// Initialise express
const app = express();

DotEnv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);



const PORT = 8000;

app.listen(8000, () => console.log(`Server is running successfully on port ${PORT}`));

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blogapplication.m2g29.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// connect with database
Connection(URL);
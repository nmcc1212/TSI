import express, { Request, Response } from "express";
import loggerMiddleware from './loggerMiddleware';


const app = express();
const port = 3100;

app.use(loggerMiddleware);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/news', (req: Request, res: Response) => {
  res.send('This is a news page');
})

/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import axios from 'axios';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const port = 50111;

const cors = require('cors');
app.use(cors());

app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb://100.125.70.69:27017/newsDB", {
        authSource: "admin",
        user: "root",
        pass: "password",
});

// Define Mongoose schema and model
const NewsItemSchema = new mongoose.Schema({
  id: {Number, required: true},
  title: {String,required: true},
  contentSnippet: {String,required: true},
  date: {Date, required: true},
  sourceID: {String, required: true},
});



app.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

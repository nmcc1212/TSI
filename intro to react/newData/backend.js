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
});



app.post('/api/fetchNews', async (req, res) => {
  try {
    const rssFeedUrls = req.body.rssFeedUrls;
    console.log(`Fetching and parsing RSS feeds from: ${rssFeedUrls}`);

    let mergedData = [];

    for (const element of rssFeedUrls) {
      const response = await axios.get(`http://127.0.0.1:50110?feedURL=${element}`);
      const newsItems = response.data.items.map(item => ({ ...item, isoDate: new Date(item.isoDate) }));
      newsItems.sort((a, b) => b.isoDate - a.isoDate);

      const hash = crypto.createHash('sha256');
      hash.update(element);
      const collectionName = `${hash.digest('hex')}`;

      const logsDir = 'logs';
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
      }

      let loggedData = [];

      try {
        // Retrieve data from MongoDB
        const NewsItem = mongoose.model(collectionName, NewsItemSchema);
        const existingData = await NewsItem.find({});
        loggedData = existingData.map(item => item.toObject());
      } catch (error) {
        // Handle the error or leave it as an empty array
      }

      const uniqueItemsSet = new Set(loggedData.map(item => item.link));

      newsItems.forEach(item => {
        if (!uniqueItemsSet.has(item.link)) {
          // Save data to MongoDB
          NewsItem.create(item);
          loggedData.push(item);
          uniqueItemsSet.add(item.link);
        }
      });

      // Concatenate news items to mergedData
      mergedData = mergedData.concat(loggedData);
    }

    res.json(mergedData);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

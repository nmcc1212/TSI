/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";
import axios from "axios";
import fs from "fs";
import crypto from "crypto";
import path from "path";
import mongoose from "mongoose";

const app = express();
const port = 50111;

import cors from "cors";
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
  id: { Number, required: true },
  title: { String, required: true },
  contentSnippet: { String, required: true },
  date: { Date, required: true },
  sourceID: { String, required: true },
});

const SourcesSchema = new mongoose.Schema({
  id: { Number, required: true },
  name: { String, required: true },
  url: { String, required: true },
  category: { String, required: true },
});

app.get("/api/fetchNews", async (req, res) => {
  try {
    const category = req.query.category;

    // lookup the RSS feed URLs for the given category
    const sources = await mongoose.model("Sources", SourcesSchema);
    const rssFeedUrls = sources.find({ category }).lean().exec();

    console.log(`Fetching and parsing RSS feeds from: ${rssFeedUrls}`);

    for (const element of rssFeedUrls) {
      const response = await axios.get(
        `http://127.0.0.1:50110?feedURL=${element}`,
      );
      const newsItems = response.data.items.map((item) => ({
        ...item,
        isoDate: new Date(item.isoDate),
      }));
      newsItems.sort((a, b) => b.isoDate - a.isoDate);

      const hash = crypto.createHash("sha256");
      hash.update(element);
      const sourceID = `${hash.digest("hex")}`;

      for (item in newsItems) {
        item.sourceID = sourceID;
      }

      const News = mongoose.model("News", NewsItemSchema);
      // Get the existing data from the database
      const existingData = await News.find({ sourceID }).lean().exec();

      // Add new items to the database
      await News.insertMany(
        newsItems.filter(
          (item) =>
            !existingData.some(
              (existingItem) => existingItem.link === item.link,
            ),
        ),
      );

      returnData = await News.find({ sourceID }).lean().exec();
    }

    res.json(returnData);
  } catch (error) {
    console.error("Error fetching and processing data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

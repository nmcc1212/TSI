/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const app = express();
const port = 50111;

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post('/api/fetchNews', async (req, res) => {
  try {
    const rssFeedUrls = req.body.rssFeedUrls;
    console.log(`Fetching and parsing RSS feeds from: ${rssFeedUrls}`);
    
    let mergedData = [];

    for (const element of rssFeedUrls) {
      const response = await axios.get(`http://100.125.70.69:50110?feedURL=${element}`);
      const newsItems = response.data.items.map(item => ({ ...item, isoDate: new Date(item.isoDate) }));
      newsItems.sort((a, b) => b.isoDate - a.isoDate);

      const hash = crypto.createHash('sha256');
      hash.update(element);
      const filename = `${hash.digest('hex')}.json`;

      const logsDir = 'logs';
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
      }

      let loggedData = [];
      try {
        const existingData = JSON.parse(fs.readFileSync(path.join(logsDir, filename)));
        loggedData = existingData.slice(0, 1000);
      } catch (error) {
        // Handle the error or leave it as an empty array
      }

      const uniqueItemsSet = new Set(loggedData.map(item => item.link));

      newsItems.forEach(item => {
        if (!uniqueItemsSet.has(item.link)) {
          loggedData.push(item);
          uniqueItemsSet.add(item.link);
        }
      });

      fs.writeFileSync(path.join(logsDir, filename), JSON.stringify(loggedData, null, 2));

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

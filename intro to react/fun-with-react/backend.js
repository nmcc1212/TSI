const express = require('express');
const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path'); // Add this line to use the path module
const app = express();
const port = 50111;

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post('/api/fetchNews', async (req, res) => {
  try {
    const rssFeedUrls = req.body.rssFeedUrls;
    const responses = await Promise.all(
      rssFeedUrls.map(url => axios.get(`http://127.0.0.1:50110?feedURL=${url}`))
    );
    const data = await Promise.all(responses.map(response => response.data));

    for (let i = 0; i < data.length; i++) {
      const newsItems = data[i].items;
      newsItems.forEach(item => {
        item.isoDate = new Date(item.isoDate);
      });
      newsItems.sort((a, b) => b.isoDate - a.isoDate);

      // Create a hash of the URL to use as the filename
      const hash = crypto.createHash('sha256');
      hash.update(rssFeedUrls[i]);
      const filename = `${hash.digest('hex')}.json`;

      // Specify the logs directory and create it if it doesn't exist
      const logsDir = 'logs';
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
      }

      // Read the existing log file
      let loggedData;
      try {
        loggedData = JSON.parse(fs.readFileSync(path.join(logsDir, filename)));
      } catch (error) {
        loggedData = [];
      }

      // Append new items to the log file, preventing duplicates
      newsItems.forEach(item => {
        if (!loggedData.some(loggedItem => loggedItem.link === item.link)) {
          loggedData.push(item);
        }
      });

      fs.writeFileSync(path.join(logsDir, filename), JSON.stringify(loggedData, null, 2));
    }

    res.json(data.flatMap(d => d.items));
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

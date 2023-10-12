const express = require('express');
const axios = require('axios');
const app = express();
const port = 50111; // Change this to the port you want to use

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
    const newsItems = data.flatMap(d => d.items);
    console.log(newsItems);

    // Convert isoDate strings to Date objects and sort by published date
    newsItems.forEach(item => {
    item.isoDate = new Date(item.isoDate);
    });
    newsItems.sort((a, b) => b.isoDate - a.isoDate);
    res.json(newsItems);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

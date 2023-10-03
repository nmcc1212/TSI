import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsList(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Replace '<RSS_FEED_URL>' with the actual RSS feed URL
    fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=${(props.rssFeedUrl)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>News</h2>
      <ul>
        {news.map((item, index) => (
          <NewsItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;

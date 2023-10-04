import React, { useEffect, useState } from 'react';
//import NewsItem from './NewsItem';

function NewsList(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
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
  });

  return (
    <div>
      <ul>
        {news.map((item, index) => (
          <NewsItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const NewsItem = ({ item }) => {
  const { title, link, description, published } = item;
  let desc = description;
  console.log(title);

  if (desc !== undefined && description.includes("<") && description.includes(">")) {
    const regex = /<[^>]+>/gi;
    desc = desc.replace(regex, "");
  }
  if (desc !== undefined && description.includes("&nbsp;")) {
    const regex = /&nbsp;/gi;
    desc = desc.replace(regex, " ");
  }
  if (desc !== undefined && description.includes("&#039;s")) {
    const regex = /&#039;s/gi;
    desc = desc.replace(regex, "'");
  }

  console.log(title);
  return (
    <li>
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      <p>{desc}</p>
      <p>Published: {new Date(published).toLocaleString()}</p>
    </li>
  );
};

// export default NewsItem;


export default NewsList;

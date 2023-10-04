import React, { useEffect, useState } from 'react';
//import NewsItem from './NewsItem';

function NewsList(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:50110?feedURL=${(props.rssFeedUrl)}`)
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
  }, []); // add empty array as second argument to useEffect

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
  const { title, link, contentSnippet, isoDate } = item;
  let desc = contentSnippet;

  if (desc !== undefined && desc.includes("<") && desc.includes(">")) {
    const regex = /<[^>]+>/gi;
    desc = desc.replace(regex, "");
  }
  if (desc !== undefined && desc.includes("&nbsp;")) {
    const regex = /&nbsp;/gi;
    desc = desc.replace(regex, " ");
  }
  if (desc !== undefined && desc.includes("&#039;s")) {
    const regex = /&#039;s/gi;
    desc = desc.replace(regex, "'");
  }
  return (
    <li>
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      <p>{desc}</p>
      <p>Published: {isoDate}</p>
    </li>
  );
};

export default NewsList;

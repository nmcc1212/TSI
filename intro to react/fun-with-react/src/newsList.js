import React, { useEffect, useState } from 'react';

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
  }, []); // add empty array as second argument to useEffect so no inf loop

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
      <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>  {/* title */}
      <p class="mb-3 text-gray-500 dark:text-gray-400">{desc}</p> {/* description */}
      <p class="mb-1 text-gray-500 dark:text-gray-400">Published: {isoDate}</p> {/* date */}
    </li>
  );
};

export default NewsList;

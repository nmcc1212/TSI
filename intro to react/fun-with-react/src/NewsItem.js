import React from 'react';

const NewsItem = ({ item }) => {
  const { title, link, description, published } = item;
  let desc = description;

  if (desc !== undefined && description.includes("<") && description.includes(">")) {
    const regex = /<[^>]+>/gi;
    desc = description.replace(regex, "");
  }

  return (
    <li>
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      <p>{desc}</p>
      <p>Published: {new Date(published).toLocaleString()}</p>
    </li>
  );
};

export default NewsItem;

import React from 'react';

const NewsItem = ({ item }) => {
  const { title, link, description, published } = item;
  console.log(item);
  console.log(title);

  return (
    <li>
      <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
      <p>{description}</p>
      <p>Published: {new Date(published).toLocaleString()}</p>
    </li>
  );
};

export default NewsItem;

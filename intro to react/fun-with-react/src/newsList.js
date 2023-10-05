import React, { useEffect, useState } from 'react';

function NewsList(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (Array.isArray(props.rssFeedUrls)) {
          const responses = await Promise.all(
            props.rssFeedUrls.map(url =>
              fetch(`http://127.0.0.1:50110?feedURL=${url}`)
            )
          );
          const data = await Promise.all(responses.map(response => response.json()));
          const newsItems = data.flatMap(d => d.items);

          // Convert isoDate strings to Date objects and sort by published date
          newsItems.forEach(item => {
            item.isoDate = new Date(item.isoDate);
          });
          newsItems.sort((a, b) => b.isoDate - a.isoDate);

          setNews(newsItems);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {news
        .filter(item => {
          if (props.searchQuery === '') {
            return true;
          } else if (item.title.toLowerCase().includes(props.searchQuery.toLowerCase())) {
            return true;
          }
          return false;
        })
        .map((item, index) => (
          <NewsItem key={index} item={item} />
        ))}
    </div>
  );
}

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

  // Format the date as a string
  const formattedDate = item.isoDate.toLocaleString();

  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex-grow border-2 h-80 flex flex-col block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="mb-4 select-text text-lg font-normal text-gray-500 dark:text-gray-400"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>  {/* title */}
      <p className="mb-3 select-text text-gray-500 dark:text-gray-400">{desc}</p> {/* description */}
      <p className="mb-1 select-text text-gray-500 dark:text-gray-400">Published: {formattedDate}</p> {/* formatted date */}
    </a>
  );
};

export default NewsList;

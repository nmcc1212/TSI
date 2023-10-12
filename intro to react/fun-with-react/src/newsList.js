import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsList(props) { // this function is used to render the news list and query the API
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (Array.isArray(props.rssFeedUrls)) {
          const response = await axios.post('http://localhost:50111/api/fetchNews', {
            rssFeedUrls: props.rssFeedUrls,
          });
          setNews(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-10 ml-10 overflow-scroll">
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
  const formattedDate = isoDate.toLocaleString();

  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex-grow border-2 h-80 flex overflow-auto flex-col block w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="mb-4 select-text text-lg font-normal font-bold text-black-500 dark:text-gray-400"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>  {/* title */}
      <p className="mb-3 select-text text-gray-500 dark:text-gray-400">{desc}</p> {/* description */}
      <p className="mb-1 select-text text-gray-500 dark:text-gray-400">Published: {formattedDate}</p> {/* formatted date */}
    </a>
  );
};

export default NewsList;

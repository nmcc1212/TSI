import React, { useEffect, useState} from 'react';



function NewsList(props) {
  const [news, setNews] = useState([]);

  console.log(props.searchQuery);

  
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
          setNews(newsItems);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div class="grid grid-cols-3 gap-20 ml-10">
      {
        news.filter(item => {
          if (props.searchQuery === '') {
            return item;
          } else if (item.title != null && item.title !== undefined && item.title.toLowerCase().includes(props.searchQuery.toLowerCase())) {
            return item;
          }
        }).map((item, index) => (
          <NewsItem key={index} item={item} />
        ))
      }
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
    <a href={link} target="_blank" rel="noreferrer" class="flex-grow border-2 flex flex-col block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p class="mb-4 select-text text-lg font-normal text-gray-500 dark:text-gray-400"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>  {/* title */}
        <p class="mb-3 select-text text-gray-500 dark:text-gray-400">{desc}</p> {/* description */}
        <p class="mb-1 select-text text-gray-500 dark:text-gray-400">Published: {isoDate}</p> {/* date */}

    </a>
  );
};

export default NewsList;

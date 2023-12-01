import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface NewsItem {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
}

function NewsList(props: Readonly<{ rssFeedUrls: string[]; searchQuery: string; }>) {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (Array.isArray(props.rssFeedUrls)) {
          const response = await axios.post('http://localhost:50111/api/fetchNews', {
            rssFeedUrls: props.rssFeedUrls,
          });
          const sortedNews = response.data.sort((a: NewsItem, b: NewsItem) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
          setNewsData(sortedNews);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data only when the component mounts
    if (newsData.length === 0) {
      fetchData();
    }
  }, [props.rssFeedUrls, newsData.length]);

  useEffect(() => {
    // Filter news locally based on the search query
    const filtered = newsData.filter(item =>
      item.title.toLowerCase().includes(props.searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [newsData, props.searchQuery]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-10 ml-10 overflow-scroll">
      {filteredNews.map(item => (
        <NewsItem key={uuidv4()} item={item} />
      ))}
    </div>
  );
}

interface NewsItemType {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
}

interface Props {
  item: NewsItemType;
}

const NewsItem = ({ item }: Props) => {
  const { title, link, contentSnippet, isoDate } = item;
  let desc = contentSnippet;

  desc = desc?.replace(/<[^>]+>/gi, "")?.replace(/&nbsp;/gi, " ")?.replace(/&#039;s/gi, "'");

  // Format the date as a string
  const formattedDate = new Date(isoDate).toLocaleString();

  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex-grow border-2 h-80 flex overflow-auto flex-col block w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="mb-4 select-text text-lg font-normal font-bold text-black-500 dark:text-gray-400"><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>  {/* title */}
      <p className="mb-3 select-text text-gray-500 dark:text-gray-400">{desc}</p> {/* description */}
      <p className="mb-1 select-text text-gray-500 dark:text-gray-400">Published: {formattedDate}</p> {/* formatted date */}
    </a>
  );
};

export default NewsList;

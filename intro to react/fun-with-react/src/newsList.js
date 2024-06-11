import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const NewsItem = ({ item }) => {
  const { title, link, contentSnippet, isoDate } = item;
  let desc = contentSnippet;

  desc = desc
    ?.replace(/<[^>]+>/gi, "")
    ?.replace(/&nbsp;/gi, " ")
    ?.replace(/&#039;s/gi, "'");

  // Format the date as a string
  const formattedDate = isoDate.toLocaleString();

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex-grow border-2 h-80 flex overflow-auto flex-col block w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p className="mb-4 select-text text-lg font-normal font-bold text-black-500 dark:text-gray-400">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </p>{" "}
      {/* title */}
      <p className="mb-3 select-text text-gray-500 dark:text-gray-400">
        {desc}
      </p>{" "}
      {/* description */}
      <p className="mb-1 select-text text-gray-500 dark:text-gray-400">
        Published: {formattedDate}
      </p>{" "}
      {/* formatted date */}
    </a>
  );
};

NewsItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
    isoDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

function NewsList(props) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (Array.isArray(props.rssFeedUrls)) {
          const response = await axios.post(
            "http://localhost:50111/api/fetchNews",
            {
              rssFeedUrls: props.rssFeedUrls,
            },
          );
          setNews(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [props.rssFeedUrls]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-10 ml-10 overflow-scroll">
      {news
        .filter((item) => {
          return !!(
            props.searchQuery === "" ||
            item.title.toLowerCase().includes(props.searchQuery.toLowerCase())
          );
        })
        .map((item, index) => (
          <NewsItem key={uuidv4()} item={item} />
        ))}
    </div>
  );
}

NewsList.propTypes = {
  rssFeedUrls: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default NewsList;

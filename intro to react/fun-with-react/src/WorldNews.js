import NewsList from './newsList';

function WorldNews()
{
    return(
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">World News</h1>
            <NewsList rssFeedUrl="https://www.aljazeera.com/xml/rss/all.xml" />
            <NewsList rssFeedUrl="http://feeds.bbci.co.uk/news/world/rss.xml" />
            <NewsList rssFeedUrl="https://rss.nytimes.com/services/xml/rss/nyt/World.xml" />
            <NewsList rssFeedUrl="https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best" />
            <NewsList rssFeedUrl="https://feeds.skynews.com/feeds/rss/world.xml" />
            <NewsList rssFeedUrl="https://feeds.washingtonpost.com/rss/world" />
            <NewsList rssFeedUrl="https://www.reddit.com/r/worldnews/top/.rss" />
        </div>
    );
}
export default WorldNews;
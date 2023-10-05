import NewsList from '../newsList';

function worldNews(searchQuery) 
    {
    let worldUrls = ["https://www.aljazeera.com/xml/rss/all.xml","http://feeds.bbci.co.uk/news/world/rss.xml","https://rss.nytimes.com/services/xml/rss/nyt/World.xml","https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best","https://feeds.skynews.com/feeds/rss/world.xml","https://www.reddit.com/r/worldnews/top/.rss"]
        return (
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                <NewsList rssFeedUrls={worldUrls} searchQuery={searchQuery}/>
            </div>
        )
    }
export default worldNews;
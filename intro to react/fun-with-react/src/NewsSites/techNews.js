import NewsList from '../newsList';

function techNews(searchQuery) 
    {
        let techUrls = ["https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml","https://www.reddit.com/r/technology/top/.rss", "http://rss.slashdot.org/Slashdot/slashdot","http://feeds.arstechnica.com/arstechnica/index/","https://www.reddit.com/r/tech/top/.rss","https://www.reddit.com/r/technews/top/.rss","https://www.reddit.com/r/technology/top/.rss"]
        return (
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                <NewsList rssFeedUrls={techUrls} searchQuery={searchQuery}/>
            </div>
        )
    }
export default techNews;
import NewsList from './newsList';

function TechNews()
{
    return(
        <div>
            <h1>Tech News</h1>
            <NewsList rssFeedUrl="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" />
            <NewsList rssFeedUrl="https://www.reddit.com/r/technology/top/.rss" />
            <NewsList rssFeedUrl="https://www.reddit.com/r/technews/top/.rss" />
            <NewsList rssFeedUrl="https://www.reddit.com/r/tech/top/.rss" />
            <NewsList rssFeedUrl="http://feeds.arstechnica.com/arstechnica/index/" />
            <NewsList rssFeedUrl="http://rss.slashdot.org/Slashdot/slashdot" />
        </div>
    );
}
export default TechNews;
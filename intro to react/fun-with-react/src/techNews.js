import NewsList from './newsList';

function TechNews()
{
    return(
        <div>
            <h1>Tech News</h1>
            <NewsList rssFeedUrl="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" />
        </div>
    );
}
export default TechNews;
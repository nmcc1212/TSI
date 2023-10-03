import NewsList from './newsList';

function UKNews()
{
    return(
        <div>
            <h1>UK News</h1>
            <NewsList rssFeedUrl="http://feeds.bbci.co.uk/news/uk/rss.xml" />
        </div>
    );
}
export default UKNews;
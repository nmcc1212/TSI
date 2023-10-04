import NewsList from './newsList';

function HackerNews()
{
    return(
        <div>
            <h1>Hacker News</h1>
            <NewsList rssFeedUrl="https://hnrss.org/frontpage?points=30" />
        </div>
    );
}
export default HackerNews;
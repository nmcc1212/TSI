import NewsList from './newsList';

function SlavaUkraine()
{
    return(
        <div>
            <h1>Ukraine News</h1>
            <NewsList rssFeedUrl="https://www.independent.co.uk/topic/ukraine/rss" />
        </div>
    );
}
export default SlavaUkraine;
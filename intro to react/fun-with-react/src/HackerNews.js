import NewsList from './newsList';

function UKNews()
{
    return(
        <div>
            <h1>UK News</h1>
            <NewsList rssFeedUrl="https://hnrss.org/frontpage?points=30" />
        </div>
    );
}
export default UKNews;
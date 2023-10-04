import NewsList from './newsList';

function SlashDot()
{
    return(
        <div>
            <h1>UK News</h1>
            <NewsList rssFeedUrl="http://rss.slashdot.org/Slashdot/slashdot" />
        </div>
    );
}
export default SlashDot;
import NewsList from './newsList';

function SlashDot()
{
    return(
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">testing</h1>
            <NewsList rssFeedUrl="http://rss.slashdot.org/Slashdot/slashdot" />
        </div>
    );
}
export default SlashDot;
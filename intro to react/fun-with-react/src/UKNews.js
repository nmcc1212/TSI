import NewsList from './newsList';

function UKNews()
{
    return(
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">UK News</h1>
            <NewsList rssFeedUrl="http://feeds.bbci.co.uk/news/uk/rss.xml" />
        </div>
    );
}
export default UKNews;
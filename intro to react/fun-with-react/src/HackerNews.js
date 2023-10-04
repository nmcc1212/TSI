import NewsList from './newsList';

function HackerNews()
{
    return(
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hacker News</h1>
            <NewsList rssFeedUrl="https://hnrss.org/frontpage?points=30" />
        </div>
    );
}
export default HackerNews;
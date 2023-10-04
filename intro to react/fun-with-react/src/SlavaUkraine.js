import NewsList from './newsList';

function SlavaUkraine()
{
    return(
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ukraine News</h1>
            <NewsList rssFeedUrl="https://www.independent.co.uk/topic/ukraine/rss" />
        </div>
    );
}
export default SlavaUkraine;
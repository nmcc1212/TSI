import NewsList from '../newsList';

function ukNews(searchQuery) {

    let ukUrls = ["http://feeds.bbci.co.uk/news/uk/rss.xml","https://dailymail.co.uk/home/index.rss","https://telegraph.co.uk/rss.xml","https://independent.co.uk/rss","https://standard.co.uk/rss"]
        return (
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                <NewsList rssFeedUrls={ukUrls} searchQuery={searchQuery}/>
            </div>
        )
    }
export default ukNews;
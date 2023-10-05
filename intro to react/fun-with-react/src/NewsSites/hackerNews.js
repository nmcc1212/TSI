import NewsList from '../newsList';

function hackerNews(searchQuery) {

    let hackerUrls = ["https://hnrss.org/frontpage?points=30"]

        return (
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                <NewsList rssFeedUrls={hackerUrls} searchQuery={searchQuery}/>
            </div>
        )
    }
export default hackerNews;
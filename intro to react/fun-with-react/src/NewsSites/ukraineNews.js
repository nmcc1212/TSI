import NewsList from '../newsList';

function techNews(searchQuery) {
    let ukraineUrls = ["https://www.independent.co.uk/topic/ukraine/rss","https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/news-event/ukraine-russia/rss.xml","https://www.ft.com/war-in-ukraine?format=rss","https://yahoo.com/news/rss/world","https://abcnews.go.com/abcnews/internationalheadlines",]
        return (
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                <NewsList rssFeedUrls={ukraineUrls} searchQuery={searchQuery}/>
            </div>
        )
    }
export default techNews;

import NewsList from '../newsList';

function defenceNews(searchQuery) {

    let defenceUrls = ["https://defence-blog.com/topics/uk/feed/","https://www.thinkdefence.co.uk/feed/","https://ukdefencejournal.org.uk/feed/","https://www.gov.uk/government/organisations/ministry-of-defence.atom"] 

        return (
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                <NewsList rssFeedUrls={defenceUrls} searchQuery={searchQuery}/>
            </div>
        )
    }
export default defenceNews;
import '../index.css';

const techUrls: string[] = ["https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml", "http://rss.slashdot.org/Slashdot/slashdot","http://feeds.arstechnica.com/arstechnica/index/","https://www.reddit.com/r/tech/top/.rss","https://www.reddit.com/r/technews/top/.rss","https://www.reddit.com/r/technology/top/.rss"]
const ukraineUrls: string[] = ["https://www.independent.co.uk/topic/ukraine/rss","https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/news-event/ukraine-russia/rss.xml","https://www.ft.com/war-in-ukraine?format=rss","https://yahoo.com/news/rss/world","https://abcnews.go.com/abcnews/internationalheadlines",]
const ukUrls: string[] = ["http://feeds.bbci.co.uk/news/uk/rss.xml","https://dailymail.co.uk/home/index.rss","https://telegraph.co.uk/rss.xml","https://independent.co.uk/rss","https://standard.co.uk/rss"]
const worldUrls: string[] = ["https://www.aljazeera.com/xml/rss/all.xml","http://feeds.bbci.co.uk/news/world/rss.xml","https://rss.nytimes.com/services/xml/rss/nyt/World.xml","https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best","https://feeds.skynews.com/feeds/rss/world.xml","https://www.reddit.com/r/worldnews/top/.rss"]
const hackerUrls: string[] = ["https://hnrss.org/frontpage?points=30"]
const slashDotUrls: string[] = ["http://rss.slashdot.org/Slashdot/slashdot"]
const defenceUrls: string[] = ["https://defence-blog.com/topics/uk/feed/","https://www.thinkdefence.co.uk/feed/","https://ukdefencejournal.org.uk/feed/","https://www.gov.uk/government/organisations/ministry-of-defence.atom"]
  

export default function page({ params }) {
    if (params.newsSource.length > 1) {
        <h1>ERROR</h1>
    }
    if (!params.newsSource) {
        params.newsSource = "TechNews"
    }
        return (
        <div>
            <h1>Page {params.newsSource}</h1>
        </div>
        )
}
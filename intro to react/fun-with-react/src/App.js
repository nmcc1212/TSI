import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './navBar.js';
import NewsList from './newsList';
import { useState } from "react";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  let techUrls = ["https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml", "http://rss.slashdot.org/Slashdot/slashdot","http://feeds.arstechnica.com/arstechnica/index/","https://www.reddit.com/r/tech/top/.rss","https://www.reddit.com/r/technews/top/.rss","https://www.reddit.com/r/technology/top/.rss"]
  let ukraineUrls = ["https://www.independent.co.uk/topic/ukraine/rss","https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/news-event/ukraine-russia/rss.xml","https://www.ft.com/war-in-ukraine?format=rss","https://yahoo.com/news/rss/world","https://abcnews.go.com/abcnews/internationalheadlines",]
   let ukUrls = ["http://feeds.bbci.co.uk/news/uk/rss.xml","https://dailymail.co.uk/home/index.rss","https://telegraph.co.uk/rss.xml","https://independent.co.uk/rss","https://standard.co.uk/rss"]
  let worldUrls = ["https://www.aljazeera.com/xml/rss/all.xml","http://feeds.bbci.co.uk/news/world/rss.xml","https://rss.nytimes.com/services/xml/rss/nyt/World.xml","https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best","https://feeds.skynews.com/feeds/rss/world.xml","https://www.reddit.com/r/worldnews/top/.rss"]
  let hackerUrls = ["https://hnrss.org/frontpage?points=30"]
  let defenceUrls = ["https://defence-blog.com/topics/uk/feed/","https://www.thinkdefence.co.uk/feed/","https://ukdefencejournal.org.uk/feed/","https://www.gov.uk/government/organisations/ministry-of-defence.atom"]
  // let allUrls = techUrls.concat(ukraineUrls, ukUrls, worldUrls, hackerUrls);
  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  }
  return (
    <div>
      <div>
        <div className="App">
          <header className="App-header">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<NavBar sendQueryToParent={handleSearchQuery}/>}> 
                  <Route index element={ 
                    <div key="Home">
                      <div>
                        <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                        <NewsList rssFeedUrls={techUrls} searchQuery={searchQuery}/>
                      </div> 
                    </div> 
                  }/>
                  <Route path="/Ukraine" element={
                    <div key="Ukraine">
                      <div>
                        <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ukraine News</h1>
                        <NewsList rssFeedUrls={ukraineUrls} searchQuery={searchQuery} />
                      </div> 
                    </div> 
                  } />
                  <Route path="/UKNews" element={
                    < div key="UKNews">
                      <div>
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">UK News</h1>
                      <NewsList rssFeedUrls={ukUrls} searchQuery={searchQuery} />
                      </div>
                    </div>
                  } />
                  <Route path="/WorldNews" element={
                    <div key="WorldNews">
                      <div>
                        <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">World News</h1>
                        <NewsList rssFeedUrls={worldUrls} searchQuery={searchQuery} />
                      </div>
                    </div>
                  } />
                  <Route path="/HackerNews" element={
                    <div key="HackerNews">
                      <div>
                        <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hacker News</h1>
                        <NewsList rssFeedUrls={hackerUrls} searchQuery={searchQuery} />
                      </div>
                    </div>
                  } />
                  <Route path="/SlashDot" element={
                    <div key="SlashDotNews">
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">testing</h1>
                      <NewsList rssFeedUrls="http://rss.slashdot.org/Slashdot/slashdot" searchQuery={searchQuery} />
                    </div>
                  } />
                
                  <Route path="/DefenceNews" element={
                    <div key="DefenceNews">
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Defence News</h1>
                      <NewsList rssFeedUrls={defenceUrls} searchQuery={searchQuery} />
                    </div>
                   } />
                </Route>
              </Routes>
            </BrowserRouter>
          </header>
        </div>
      </div>
    </div>

    // aaaa
  );
}

export default App;

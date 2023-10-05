// import './App.css';

// Make search bar \\

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechNews from './techNews.js';
import NavBar from './navBar.js';
import SlavaUkraine from './SlavaUkraine.js';
import UKNews from './UKNews.js';
import WorldNews from './WorldNews.js';
import HackerNews from './HackerNews.js';
import SlashDot from "./SlashDot.js";
import NewsList from './newsList';



function App() {
  let techUrls = ["https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml","https://www.reddit.com/r/technology/top/.rss", "http://rss.slashdot.org/Slashdot/slashdot","http://feeds.arstechnica.com/arstechnica/index/","https://www.reddit.com/r/tech/top/.rss","https://www.reddit.com/r/technews/top/.rss","https://www.reddit.com/r/technology/top/.rss"]
  let ukraineUrls = ["https://www.independent.co.uk/topic/ukraine/rss"]
  let ukUrls = ["http://feeds.bbci.co.uk/news/uk/rss.xml"]
  let worldUrls = ["https://www.aljazeera.com/xml/rss/all.xml","http://feeds.bbci.co.uk/news/world/rss.xml","https://rss.nytimes.com/services/xml/rss/nyt/World.xml","https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best","https://feeds.skynews.com/feeds/rss/world.xml","https://www.reddit.com/r/worldnews/top/.rss"]
  let hackerUrls = ["https://hnrss.org/frontpage?points=30"]
  return (
    <div>
      <div>
        <div className="App">
          <header className="App-header">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<NavBar />}>
                  <Route index element={
                    <div>
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News</h1>
                      <NewsList rssFeedUrls={techUrls} />
                    </div>} />
                  <Route path="/Ukraine" element={        
                    <div>
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ukraine News</h1>
                      <NewsList rssFeedUrls={ukraineUrls} />
                    </div>} />
                  <Route path="/UKNews" element={
                    <div>
                    <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">UK News</h1>
                    <NewsList rssFeedUrls={ukUrls} />
                    </div>
                  } />
                  <Route path="/WorldNews" element={
                    <div>
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">World News</h1>
                      <NewsList rssFeedUrls={worldUrls} />
                    </div>
                  } />
                  <Route path="/HackerNews" element={
                    <div>
                      <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hacker News</h1>
                      <NewsList rssFeedUrls={hackerUrls} />
                    </div>
                  } />
                  <Route path="/SlashDot" element={
                    <div>
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">testing</h1>
                      <NewsList rssFeedUrls="http://rss.slashdot.org/Slashdot/slashdot" />
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

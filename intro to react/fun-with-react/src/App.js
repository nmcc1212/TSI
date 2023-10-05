// import './App.css';

// Make search bar \\

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './navBar.js';
import NewsList from './newsList';
import { useState } from "react";
import UKNews from "./NewsSites/ukNews.js";
import techNews from "./NewsSites/techNews.js";
import ukraineNews from "./NewsSites/ukraineNews.js";
import worldNews from "./NewsSites/worldNews.js";
import hackerNews from "./NewsSites/hackerNews.js";
import defenceNews from "./NewsSites/defenceNews.js";
// import slashdot from "./NewsSites/slashdot.js";



let hackerUrls



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  }
  return (
    <div>
      <div>
        <div className="App">
          <header className="App-header">
          <BrowserRouter>
              <Routes >
                <Route path="/" element={<NavBar sendQueryToParent={handleSearchQuery}/>}>
                  <Route index element={<techNews/>} />
                  <Route path="/Ukraine" element={<ukraineNews/>} />
                  <Route path="/UKNews" element={<UKNews/>} />
                  <Route path="/WorldNews" element={<worldNews/>} />
                  <Route path="/HackerNews" element={<worldNews/>} />
                  <Route path="/SlashDot" element={
                    <div>
                      <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">testing</h1>
                      <NewsList rssFeedUrls="http://rss.slashdot.org/Slashdot/slashdot" searchQuery={searchQuery} />
                    </div>
                  } />
                  <Route path="/DefenceNews" element={<defenceNews/>} />  
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
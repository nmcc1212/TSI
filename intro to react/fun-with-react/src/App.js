//import './App.css';

// Make search bar \\

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechNews from './techNews.js';
import NavBar from './navBar.js';
import SlavaUkraine from './SlavaUkraine.js';
import UKNews from './UKNews.js';
import WorldNews from './WorldNews.js';
import HackerNews from './HackerNews.js';


function App() {
  
  return (
    <div>
      <div>
        <div className="App">
          <header className="App-header">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<NavBar />}>
                  <Route index element={<TechNews />} />
                  <Route path="/Ukraine" element={<SlavaUkraine />} />
                  <Route path="/UKNews" element={<UKNews />} />
                  <Route path="/WorldNews" element={<WorldNews />} />
                  <Route path="/HackerNews" element={<HackerNews />} />
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

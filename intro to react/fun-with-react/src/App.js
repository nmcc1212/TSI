//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TechNews from './techNews.js';
import NavBar from './navBar.js';
import SlavaUkraine from './SlavaUkraine.js';

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

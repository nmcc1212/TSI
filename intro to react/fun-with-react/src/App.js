import logo from './logo.svg';
import './App.css';
import NewsList from './newsList';
import NewsItem from './NewsItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewsList rssFeedUrl="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" />

      </header>
    </div>
  );
}

export default App;

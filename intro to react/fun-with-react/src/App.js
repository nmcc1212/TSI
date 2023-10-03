import logo from './logo.svg';
import './App.css';
import NewsList from './newsList';
import NewsItem from './NewsItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <route>
          <NewsList rssFeedUrl="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" />

        </route>

      </header>
    </div>
  );
}

export default App;

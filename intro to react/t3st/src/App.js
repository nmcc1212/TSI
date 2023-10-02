import logo from './logo.svg';
import './App.css';
import Example from './notApp.js'
import {buttonResponse} from './notApp.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={buttonResponse}>Click Me!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// create example class component

export default App;

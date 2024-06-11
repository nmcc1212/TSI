import "./App.css";
import Example from "./notApp.js";
import buttonResponse from "./buttonAlert.js";
import LogoToggle from "./logoToggle.js";
import Counter from "./counter.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example />
        <LogoToggle />
        <Counter />
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

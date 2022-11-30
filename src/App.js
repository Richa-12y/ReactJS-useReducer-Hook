import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Building a simple counter app with the <b>useReducer Hook</b>
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { weapons } from "./data/weapons";
function App() {
  console.log(weapons);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!!!!!</p>
        {weapons.map((weapon) => (
          <li>{weapon.test}</li>
        ))}
        <Button text="Click here" />
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

export default App;

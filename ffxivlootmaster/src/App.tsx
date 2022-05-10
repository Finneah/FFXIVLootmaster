import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { weapons } from "./data/weapons";
import { ExamplePage } from "./pages/Example/ExamplePage";
function App() {
  return (
    <div className="App">
      <ExamplePage />
    </div>
  );
}

export default App;

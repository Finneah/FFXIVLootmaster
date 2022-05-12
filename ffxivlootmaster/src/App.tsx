import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExamplePage } from "./pages/Example/ExamplePage";
import Table from "./components/Gearlist/Gearlist";

function App() {
  return (
    <div className="App">
      <Table></Table>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {Gearlist} from "./components/Gearlist/Gearlist";
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
     <div className="App">
      <Gearlist></Gearlist>
    </div>
  </Provider>
  
  );
}

export default App;

import React from "react";
import Spotlight from "./components/Spotlight";
import Overview from "./components/Overview";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Overview />
        <Spotlight />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Spotlight from "./components/Spotlight";
import Overview from "./components/Overview";
import Header from "./components/Preferences";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Overview />
        <Spotlight />
        <Header />
      </div>
    </div>
  );
}

export default App;

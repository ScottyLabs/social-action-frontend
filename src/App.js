import React, { useEffect } from "react";
import axios from "axios";

import Spotlight from "./components/Spotlight";
import Overview from "./components/Overview";
import "./App.css";

const apiBaseURL = "https://api.unsplash.com/";
const authHeader = "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const unsplashURLSuffix = "?utm_source=pgh_keeps_tabs&utm_medium=referral";
const unsplashURL = "https://unsplash.com/" + unsplashURLSuffix;

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${unsplashRes ? unsplashRes.imageURL : ""})`,
      }}
    >
      <div>
        <Overview />
        <Spotlight />
        {/* <Preferences /> */}
      </div>
      <UnsplashSignature />
    </div>
  );
}

export default App;

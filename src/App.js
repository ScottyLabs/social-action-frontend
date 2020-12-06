import React, { useEffect } from "react";
import axios from "axios";

import Spotlight from "./components/Spotlight";
import Overview from "./components/Overview";
import "./App.css";
// import { getRandomPhotoURL } from "./unsplash.js";

const apiBaseURL = "https://api.unsplash.com/";
const authHeader = "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const unsplashURLSuffix = "?utm_source=medium&utm_medium=referral";
const unsplashURL = "https://unsplash.com/" + unsplashURLSuffix;

function App() {
  const [unsplashRes, setUnsplashRes] = React.useState(null);

  // GET RANDOM PHOTO REQUEST
  function setRandomPhotoURL() {
    return axios
      .get(apiBaseURL + "photos/random?orientation=landscape", {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
        params: {
          query: "background",
        },
      })
      .then((res) => {
        console.log(res);
        setUnsplashRes({
          imageURL: res.data.urls.regular,
          userURL: res.data.user.links.html,
          userFullName:
            res.data.user.first_name + " " + res.data.user.last_name,
        });
        triggerDownload(res.data.id);
        return res.data.urls.regular;
      })
      .catch((err) => console.error(err));
  }

  // TRIGGER PHOTO DOWNLOAD
  function triggerDownload(photoId) {
    axios
      .get(apiBaseURL + "photos/" + photoId + "/download", {
        headers: {
          "Accept-Version": "v1",
          Authorization: authHeader,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    setRandomPhotoURL();
  }, []);

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
      </div>
      {unsplashRes && (
        <p>
          Photo by <a href={unsplashRes.userURL}>{unsplashRes.userFullName}</a>{" "}
          on <a href={unsplashURL}>Unsplash</a>
        </p>
      )}
    </div>
  );
}

export default App;

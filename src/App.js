/* global chrome */

import React, { useState } from "react";

import Spotlight from "./components/Spotlight";
import Overview from "./components/Overview";
import Preferences from "./components/Preferences";
import UnsplashSignature from "./components/UnsplashSignature";
import "./App.css";

const default_prefs = {
  restaurant: { name: "Restaurants", checked: false },
  beauty: { name: "Beauty", checked: false },
  education: { name: "Education", checked: false },
};

function App() {
  const [unsplashRes, setUnsplashRes] = React.useState(null);
  const [prefs, setPrefs] = useState({});

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    chrome.storage.local.get(
      { business_prefs: default_prefs },
      function (result) {
        setPrefs(result.business_prefs);
        console.log(
          "Fetched chrome storage local business_prefs",
          result.business_prefs
        );
      }
    );
  }, []);

  function handlePrefsCheck(pref, checked) {
    let updated_prefs = {
      ...prefs,
      [pref]: { ...prefs[pref], checked: checked },
    };
    console.log(`Updated ${pref} to`, updated_prefs[pref].checked);

    chrome.storage.local.set({ business_prefs: updated_prefs }, function () {
      // Notify that we saved.
      setPrefs(updated_prefs);
      console.log("Set chrome storage local business_prefs", updated_prefs);
    });
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${unsplashRes ? unsplashRes.imageURL : ""})`,
      }}
    >
      <div>
        <Overview
          prefEntries={Object.entries(prefs).filter(
            ([pref, object]) => object.checked
          )}
          handlePrefsCheck={handlePrefsCheck}
          openModal={openModal}
        />
        <Spotlight />
        <Preferences
          prefs={prefs}
          handlePrefsCheck={handlePrefsCheck}
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </div>
      <UnsplashSignature
        setUnsplashRes={setUnsplashRes}
        unsplashRes={unsplashRes}
      />
    </div>
  );
}

export default App;

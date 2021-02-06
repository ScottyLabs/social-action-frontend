/* global chrome */
import React, { useState } from "react";
import Modal from "react-modal";
import "./Preferences.css";
import { Checkbox } from "semantic-ui-react";

const default_prefs = {
  restaurant: { name: "Restaurant", checked: false },
  beauty: { name: "Beauty", checked: false },
  education: { name: "Education", checked: false },
};

function Preferences() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [prefs, setPrefs] = useState({});

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

  function openModal() {
    console.log("Current prefs", prefs);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div class="preferences">
      <button id="pref-button" onClick={openModal}>
        Settings
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal">
        <h1>Settings</h1>

        <form class="settings-form">
          <h2>Types of Businesses </h2>
          <div id="checkboxes">
            <ul>
              {Object.keys(prefs).map((pref, id) => {
                return (
                  <li>
                    <Checkbox
                      toggle
                      id={id}
                      label={prefs[pref].name}
                      onChange={(e, { checked }) =>
                        handlePrefsCheck(pref, checked)
                      }
                      checked={prefs[pref].checked}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Preferences;

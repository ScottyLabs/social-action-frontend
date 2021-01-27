/* global chrome */
import React, { useState } from "react";
import Modal from "react-modal";
import "./Preferences.css";
import CheckBox from "./Checkbox";

function Preferences(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rec, setRec] = useState([
    { id: 1, value: "restaurant", isChecked: false },
    { id: 2, value: "beauty", isChecked: false },
    { id: 3, value: "education", isChecked: false },
  ]);
  // const [recRestaurant, setRestaurant] = useState(false);

  // const [recBeauty, setBeauty] = useState(false);
  // const [recEducation, setEducation] = useState(false);
  rec.forEach(restorePref);
  setRec(rec);

  function restorePref(index, value, isChecked) {
    chrome.storage.sync.get({ value: false }, function (result) {
      rec[index].isChecked = result.value;
      // console.log();
    });
  }

  /*
  function handleRestaurantChange() {
    setRestaurant(!recRestaurant);
    chrome.storage.sync.set({ restaurant: !recRestaurant }, function () {
      // Notify that we saved.
      console.log(recRestaurant);
      console.log("Settings saved");
    });
  }
  <label>
            Restaurant:
            <input
              type="checkbox"
              onChange={handleRestaurantChange}
              checked={recRestaurant}
            />
          </label>
*/

  function handleRecCheck(event) {
    let name = event.target.value;
    chrome.storage.sync.set({ name: event.target.checked }, function () {
      // Notify that we saved.
      console.log("Settings saved");
    });

    rec.forEach((option) => {
      if (option.value === event.target.value)
        option.isChecked = event.target.checked;
    });
    // this.setState({fruites: fruites})
    setRec({ rec: rec });
  }

  function openModal() {
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
          <h2>Types of Recommendations </h2>

          <ul>
            {rec.map((option) => {
              return <CheckBox handleCheck={handleRecCheck} {...rec} />;
            })}
          </ul>
        </form>
      </Modal>
    </div>
  );
}

export default Preferences;

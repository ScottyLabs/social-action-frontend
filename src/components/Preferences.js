/* global chrome */
import React, { useState } from "react";
import Modal from "react-modal";
import "./Preferences.css";

function Preferences(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [recRestaurant, setRestaurant] = useState(false);

  const [recBeauty, setBeauty] = useState(false);
  const [recEducation, setEducation] = useState(false);

  chrome.storage.sync.get({ restaurant: false }, function (result) {
    setRestaurant(result.restaurant);
    console.log(recRestaurant);
  });

  chrome.storage.sync.get({ beauty: false }, function (result) {
    setBeauty(result.beauty);
    // console.log(recRestaurant);
  });

  chrome.storage.sync.get({ education: false }, function (result) {
    setEducation(result.education);
    // console.log(recRestaurant);
  });

  function handleRestaurantChange() {
    setRestaurant(!recRestaurant);
    chrome.storage.sync.set({ restaurant: !recRestaurant }, function () {
      // Notify that we saved.
      console.log(recRestaurant);
      console.log("Settings saved");
    });
  }

  function handleBeautyChange() {
    setBeauty(!recBeauty);
    chrome.storage.sync.set({ beauty: !recBeauty }, function () {
      // Notify that we saved.
      console.log(recBeauty);
      console.log("Settings saved");
    });
  }

  function handleEducationChange() {
    setEducation(!recEducation);
    chrome.storage.sync.set({ education: !recEducation }, function () {
      // Notify that we saved.
      console.log(recEducation);
      console.log("Settings saved");
    });
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
          <label>
            Restaurant:
            <input
              type="checkbox"
              onChange={handleRestaurantChange}
              checked={recRestaurant}
            />
          </label>
          <label>
            Beauty:
            <input
              type="checkbox"
              onChange={handleBeautyChange}
              checked={recBeauty}
            />
          </label>
          <label>
            Education:
            <input
              type="checkbox"
              onChange={handleEducationChange}
              checked={recEducation}
            />
          </label>
        </form>
      </Modal>
    </div>
  );
}

export default Preferences;

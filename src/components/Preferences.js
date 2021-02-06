/* global chrome */
import React, { useState } from "react";
import Modal from "react-modal";
import "./Preferences.css";
import CheckBox from "./Checkbox";
const def = {
  restaurant: { id: 1, isChecked: false },
  beauty: { id: 2, isChecked: false },
  education: { id: 3, isChecked: false },
};

function Preferences(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rec, setRec] = useState([]);

  React.useEffect(() => {
    chrome.storage.sync.get({ options: def }, function (result) {
      setRec(result.options);
      console.log("hello");
      console.log(result.options);
    });
  }, []);

  /*
let copy = {...rec}
copy[event.target.value].isChecked = blah blah
*/
  function handleRecCheck(event) {
    // abc = {...dict, [hello.value]: {...dict[hello.value], "y":122}};
    let updated_option = event.target.value;

    let originalCheck = rec[updated_option].isChecked;
    let update = { ...rec };
    update[updated_option].isChecked = !originalCheck;

    chrome.storage.sync.set({ options: update }, function () {
      // Notify that we saved.
      console.log("Settings saved");
    });

    setRec(update);
    console.log(updated_option);
    console.log(rec);
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
            {Object.keys(rec).map((option, id) => {
              return (
                <CheckBox handleCheck={handleRecCheck} value={option} id={id} />
              );
            })}
          </ul>
        </form>
      </Modal>
    </div>
  );
}

export default Preferences;

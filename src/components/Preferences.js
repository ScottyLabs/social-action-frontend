import React from "react";
import Modal from "react-modal";
import "./Preferences.css";
import { Checkbox, List } from "semantic-ui-react";

function Preferences(props) {
  return (
    <div class="preferences">
      <button id="pref-button" onClick={props.openModal}>
        Settings
      </button>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        className="modal"
      >
        <h1>Settings</h1>

        <form class="settings-form">
          <h2>Types of Businesses </h2>
          <List>
            {Object.keys(props.prefs).map((pref, id) => {
              return (
                <List.Item>
                  <Checkbox
                    toggle
                    id={id}
                    label={props.prefs[pref].name}
                    onChange={(e, { checked }) =>
                      props.handlePrefsCheck(pref, checked)
                    }
                    checked={props.prefs[pref].checked}
                  />
                </List.Item>
              );
            })}
          </List>
        </form>
      </Modal>
    </div>
  );
}

export default Preferences;

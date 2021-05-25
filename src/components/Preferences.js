import React from "react";
import Modal from "react-modal";
import "./Preferences.css";
import { Checkbox, List } from "semantic-ui-react";

function Preferences(props) {
  return (
    <div className="preferences">
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
                <List.Item key={`prefs_list_item_${pref}`}>
                  <Checkbox
                    toggle
                    id={id}
                    label={props.prefs[pref].name}
                    onChange={(e, { checked }) =>
                      props.handlePrefsCheck(pref, checked)
                    }
                    checked={props.prefs[pref].checked}
                    key={`prefs_list_item_checkbox_${pref}`}
                  />
                </List.Item>
              );
            })}
          </List>
        </form>

        <p>
          <a href="https://social-action-backend.herokuapp.com/">
            see all businesses
          </a>
        </p>
      </Modal>
    </div>
  );
}

export default Preferences;

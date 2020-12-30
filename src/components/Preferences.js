import React, { useState } from "react";
import Modal from 'react-modal';
import "./Preferences.css";

function Preferences(props) {
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  

  return (
    <div className="preferences">
      <button id = "pref-button" onClick={openModal}>
          Preferences   
      </button>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
        >

          <h1 >Preferences</h1>
          
          <div> Color </div>
          <form>
            <input type="text" id="color-input"/>
          </form>
          <button onClick={closeModal}>close</button>
        </Modal>
    </div>
  );
}

export default Preferences;
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PopUpDetails = ({ isOpen, onRequestClose, image }) => {
  return (
    <div className="pop-up-conatiner">
      <Modal
        className={"pop-up-window"}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Result Details"
      >
        <div className="pop-up">
          {image && (
            <div className="pop-up-results">
              <div className="pop-up-result-info">
                <h1>{image.title}</h1>
                <img id="pop-up-image" src={image.src} alt={image.desc} />
                <h2>{image.desc}</h2>
              </div>

              <h2 className="close-x" onClick={onRequestClose}>
                X
              </h2>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default PopUpDetails;

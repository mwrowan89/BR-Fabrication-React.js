import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PopUpDetails = ({ isOpen, onRequestClose, image }) => {
  return (
    <div>
      <Modal
        className={"pop-up-window"}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Result Details"
      >
        <div className="pop-up">
          {image && (
            <div className="pop-up-results">
              <h1>Whoa</h1>
              <div className="pop-up-results-more-info">
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

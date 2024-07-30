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
                <h1 id="pop-up-title">{image.title}</h1>
                <h5 id="pop-up-image-desc">{image.desc}</h5>
                <img id="pop-up-image" src={image.src} alt={image.desc} />
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default PopUpDetails;

import React from "react";
import Modal from "react-modal";
import "../css/PopUp.css";

Modal.setAppElement("#root");

const PopUpDetails = ({ isOpen, onRequestClose, image }) => {
  const getMoreInfo = (image) => {
    const subject = encodeURIComponent(
      `More Information Request: ${image.title}`
    );
    const body = encodeURIComponent(
      `I would like to request more information about the following image:\n\nTitle: ${image.title}\nDescription: ${image.desc}\nImage ID: ${image.id}`
    );

    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 0);
  };
  return (
    <div className="pop-up-container">
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
                <br />
                <button onClick={() => getMoreInfo(image)}>
                  Request More Info
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default PopUpDetails;

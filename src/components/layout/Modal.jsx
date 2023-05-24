import React, { useEffect, useState } from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
};

const NoticeModal = ({ title, content }) => {
  const [isModal, setIsModal] = useState(true);
  // useEffect(() => {
  //   const modalWrapper = document.querySelector(".modal-wrapper");

  //   const handleClickOutside = (event) => {
  //     if (event.target === modalWrapper) {
  //       event.stopPropagation();
  //     }
  //   };

  //   modalWrapper.addEventListener("click", handleClickOutside);

  //   return () => {
  //     modalWrapper.removeEventListener("click", handleClickOutside);
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <Modal
      isOpen={isModal}
      style={customStyles}
      onRequestClose={() => setIsModal(false)}
    >
      <div className="modal-close-btn cursor" onClick={() => setIsModal(false)}>
        X
      </div>
      <div className="modal-title f-20 fw-600">{title}</div>
      <div className="modal-content">{content}</div>
    </Modal>
  );
};

export default NoticeModal;

import React, { useEffect } from "react";

const Modal = (props) => {
  useEffect(() => {
    const modalWrapper = document.querySelector(".modal-wrapper");

    const handleClickOutside = (event) => {
      if (event.target === modalWrapper) {
        event.stopPropagation();
      }
    };

    modalWrapper.addEventListener("click", handleClickOutside);

    return () => {
      modalWrapper.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-wrapper">
      <div className="modal-container flex">
        <button
          className="modal-btn color-white cursor f-30"
          onClick={() => props.setIsModal(false)}
        >
          X
        </button>
        <div className="modal-content container flex">
          <img src={props.img} alt={props.img} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

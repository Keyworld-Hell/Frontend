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
        <div className="modal-content flex">
          
            <img src={props.img} alt={props.title} />
            <button
              className="modal-btn color-white cursor f-30"
              onClick={() => props.setIsModal(false)}
            >
              X
            </button>

        </div>
      </div>
    </div>
  );
};

export default Modal;

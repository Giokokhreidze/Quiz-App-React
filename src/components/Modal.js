import React from "react";
import { useGlobalContext } from "../context/index";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>
          You Answered {((correct / questions.length) * 100).toFixed(0)}% of questions
          correctly
        </p>
        <button
          className="btn btn-success close-btn"
          style={{ width: "50%" }}
          onClick={closeModal}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal, showPrevImage, showNextImage }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="nav-button left" onClick={showPrevImage}>&lt;</button>
        <img src={image} alt="Modal content" />
        <button className="nav-button right" onClick={showNextImage}>&gt;</button>
        <button className="close-button" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

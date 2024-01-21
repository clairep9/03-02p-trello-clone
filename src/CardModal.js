import React from "react";
import "./CardModal.css"

function CardModal({ modal, toggleModal, card }) {
  return (
  <>
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h4>{card.title}</h4>
        <p>Description: {card.description}</p>
        <p>Comments: {card.comments.join(', ')}</p>
        <p>Due Date: {card.dueDate}</p>
        <p>Labels: {card.labels.join(', ')}</p>
        <button className="close-modal" onClick={toggleModal}>CLOSE</button>
      </div>
      </>
  );
}

export default CardModal
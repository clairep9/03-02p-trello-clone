import React, {useEffect} from "react";
import "./CardModal.css"
import deleteCard from "./CRUD/Delete";

function CardModal({ modal, toggleModal, card, setCards, listIndex, cards}) {
  useEffect(() => {
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);

  if (!modal) {
    return null;
  }
  

  const handleDeleteClick = () => {
    const cardIndex = cards.findIndex((c) => c.title === card.title);
    if (cardIndex !== -1) {
    deleteCard(listIndex, cardIndex, setCards);
    }
    toggleModal();
  };
 

  return (
  <>
      <div className="overlay"></div>
      <div className="modal-content">
        <h4>{card.title}</h4>
        <p>Description: {card.description}</p>
        <p>Comments: {card.comments}</p>
        <p>Due Date: {card.dueDate}</p>
        <p>Labels: {card.labels}</p>
        <button className="close-button" onClick={toggleModal}>CLOSE</button>
        <button className="delete-button" onClick={handleDeleteClick}>DELETE</button>
      </div>
      </>
  );
}

export default CardModal
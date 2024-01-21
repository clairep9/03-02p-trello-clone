import React, { useState, useEffect } from 'react';
import data from './data/cards.json';
import './List.css';
import CardModal from './CardModal';

const cards = [data.todoCards, data.inProgressCards, data.doneCards];

function ToDo() {
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleModal = (card) => {
    setModal(!modal);
    setSelectedCard(card);
  };

//   useEffect(() => {
//     if (modal) {
//       document.body.classList.add('active-modal');
//     } else {
//       document.body.classList.remove('active-modal');
//     }
//   }, [modal]);

  return (
      <div className="list-container">
        <div className="list">
          <h5>To Do</h5>
        </div>
        {cards[0].map((card) => (
          <div key={card} className="card">
            <h6 onClick={() => toggleModal(card)}>{card.title}</h6>
          </div>
        ))}
      
      {modal && selectedCard && (
        <CardModal modal={modal} toggleModal={toggleModal} card={selectedCard}/>
      )}
    </div>
  );
}

function InProgress() {
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleModal = (card) => {
    setModal(!modal);
    setSelectedCard(card);
  };

  return (
    <div className="list-container1">
      <div className="list">
        <h5>In Progress</h5>
      </div>
      {cards[1].map((card) => (
        <div key={card} className="card">
          <h6 onClick={() => toggleModal(card)}>{card.title}</h6>
        </div>
      ))}
      {modal && selectedCard && (
        <CardModal modal={modal} toggleModal={toggleModal} card={selectedCard}/>
      )}
    </div>
  );
}

function Done() {
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleModal = (card) => {
    setModal(!modal);
    setSelectedCard(card);
  };

  return (
    <div className="list-container2">
      <div className="list">
        <h5>Done</h5>
      </div>
      {cards[2].map((card) => (
        <div key={card} className="card">
          <h6 onClick={() => toggleModal(card)}>{card.title}</h6>
        </div>
      ))}
      {modal && selectedCard && (
        <CardModal modal={modal} toggleModal={toggleModal} card={selectedCard}/>
      )}
      <button id="addButton">
        <div>{<h5>+ Add Another List</h5>}</div>
      </button>
    </div>
  );
}

export { ToDo, InProgress, Done };
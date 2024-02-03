import React, { useState } from 'react';
import './List.css';
import CardModal from './CardModal';
import AddCardModal from './AddCardModal';
import Card from './Card';
import createCard from './CRUD/Create';


function List({ listIndex, title, cards, setCards}) {
    const [modal, setModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
  
    const toggleModal = (card) => {
      setModal(!modal);
      setSelectedCard(card);
    };

    const handleAdd = () => {
        setModal(!modal)
        setSelectedCard(null)
    }

    const handleCreate = (newCard) => {
        createCard(listIndex, newCard, setCards)
        setModal(false)
    }

    
  
    return (
      <div className="list-container">
        <div className="list">
          <h5>{title}</h5>
          <h2 className='addButton' onClick={handleAdd}>+</h2>
        </div>
        {cards.map((card, index) => (
          <Card key={index} card={card} onCardClick={toggleModal} className='card' />
        ))}

        {modal && !selectedCard && (
            <AddCardModal onClose={() => setModal(false)} onCreateCard={handleCreate} />
        )}


        {modal && selectedCard && (
          <CardModal 
          modal={modal} 
          toggleModal={toggleModal} 
          card={selectedCard} setCards={setCards} 
          listIndex={listIndex} 
          cards={cards}
          />
        )}
      </div>
    );
  }

  export {List}


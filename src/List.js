import React, { useState } from 'react';
import './List.css';
import CardModal from './CardModal';
import AddCardModal from './AddCardModal';
import Card from './Card';
import createCard from './CRUD/Create';
import {useDroppable} from '@dnd-kit/core';



function List({ listIndex, title, cards, setCards, children}) {
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


    const handleEditCard = (editedCard, index) => {
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        updatedCards[listIndex][index] = editedCard;
        return updatedCards;
      });
    };
    

    const {isOver, setNodeRef} = useDroppable({
      id: listIndex,
    });
    const style = {
      color: isOver ? 'green' : undefined,
    };

   
   
  
    
    return (
      <div className="list-container" ref={setNodeRef} style={style}>
        {children}
        <div className="list">
          <h5>{title}</h5>
          <h2 className='addButton' onClick={handleAdd}>+</h2>
        </div>
    
        {cards.map((card, index) => (
         
          <Card 
          key={index}
          card={card} 
          onCardClick={toggleModal}
          onEditCard={(editedCard) => handleEditCard(editedCard, index)}


     />
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


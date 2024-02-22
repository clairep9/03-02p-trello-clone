import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai'; 
import { useState } from 'react';
import EditCardModal from './CRUD/Update';
import { useDraggable } from '@dnd-kit/core';

function Card({ card, onCardClick, onEditCard, children }) {
  const [isEditModalOpen, setEditModalOpen] = useState(false)

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEditModalOpen(true);
  };

  const onClose = () => {
    setEditModalOpen(false);
  };

  const handleEditModalSave = (editedCard) => {
    onEditCard(editedCard);
    onClose()
  };

  const {attributes, listeners, setNodeRef, transform, setActivatorNodeRef} = useDraggable({
    id: card.title
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const handleCardClick = (e) => {
    // Check if the click event target is the edit button or one of its descendants
    if (!e.target.closest('.edit-icon')) {
        // If not, trigger the onCardClick function
        onCardClick(card);
    }
};
  
  return (
    <div className="card" 
    ref={setNodeRef}
    style={style} 
   >
    <div className='card-content'  onClick={handleCardClick}>
    <h6 
    {...listeners} 
    {...attributes} 
    ref={setActivatorNodeRef}>{card.title}</h6>
   <div className="edit-icon" onClick={(e) => handleEditClick(e)}>
        <AiOutlineEdit />
      </div>
    </div>
        {isEditModalOpen && (
        <EditCardModal
        isOpen={isEditModalOpen}
        onClose={onClose}
        onSave={handleEditModalSave}
        initialCard={card}
      />
        )}
        </div>
  );
}

export default Card;
import React from 'react';

function Card({ card, onCardClick }) {
  return (
    <div className="card" onClick={() => onCardClick(card)}>
      <h6>{card.title}</h6>
    </div>
  );
}

export default Card;
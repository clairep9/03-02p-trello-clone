import React from 'react';
import List from './List';

function Board() {
    const todoCards = ["Task 1", "Task 2"];
    const inProgressCards = ["Task 3", "Task 4"];
    const doneCards = ["Task 5", "Task 6"];
  
    return (
      <div style={{ display: 'flex' }}>
        {/* Providing values for title and cards parameters */}
        <List title="To Do" cards={todoCards} />
        <List title="In Progress" cards={inProgressCards} />
        <List title="Done" cards={doneCards} />
      </div>
    );
  }
  
  export default Board;
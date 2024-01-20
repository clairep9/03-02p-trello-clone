import React from 'react'; 
import data from './data/cards.json'
import './List.css'


const cards = [data.todoCards, data.inProgressCards, data.doneCards]
function List() {
    return (
    <div className='list-container'>
      <div className="list-container1">
         <div className="list">
        <h4>Todo</h4>
        </div>
        {cards[0].map((card, index) => (
          <div key={index} className="card">
            <h5>{card.title}</h5>
          </div>
        ))}
      </div>
    
      <div className="list-container1">
         <div className="list">
        <h4>In Progress</h4>
        </div>
        {cards[1].map((card, index) => (
          <div key={index} className="card">
            <h5>{card.title}</h5>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
 
      <div className="list-container1">
         <div className="list">
        <h4>Done</h4>
        </div>
        {cards[2].map((card, index) => (
          <div key={index} className="card">
            <h5>{card.title}</h5>
          </div>
        ))}
      </div>
      <button className="list-container1" id="addButton">
        <div>{<h4>+ Add Another List</h4>}</div>
        </button>
      </div>
    );
  }
  
  export { List };
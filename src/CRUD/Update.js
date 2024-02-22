import React, { useState } from 'react';
import './Update.css'
import { toast } from 'react-toastify';

function EditCardModal({ isOpen, onClose, onSave, initialCard }) {
  const [editedCard, setEditedCard] = useState({ ...initialCard });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCard({...editedCard, [name]: value });
  };

  const handleSave = () => {
    onSave(editedCard);
    onClose();
    toast.success('Card saved successfully!');
  };

  return (
    <div className="overlay">
      <div className="modal-content">
        <h4>Edit Card</h4>
        <label>Title:</label>
        <input type="text" name="title" value={editedCard.title} onChange={handleInputChange} /> <br/>
       
        <label>Description:</label>
        <input type="text" name="description" value={editedCard.description} onChange={handleInputChange}></input> <br/>

        <label>Comments:</label>
        <input type="text" name="comments" value={editedCard.comments} onChange={handleInputChange}></input> <br/>
        
        <label>Due Date:</label>
        <input type="date" name="dueDate" value={editedCard.dueDate} onChange={handleInputChange} /> <br/>

        <label>Labels:</label>
        <input type="text" name="labels" value={editedCard.labels} onChange={handleInputChange} /> <br/>

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EditCardModal;
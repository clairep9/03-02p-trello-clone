import React, { useState } from "react";
import { toast } from 'react-toastify';
import './AddCardModal.css';



function AddCardModal({ onClose, onCreateCard }) {
    const [newCard, setNewCard] = useState({
      title: '',
      description: '',
      comments: '',
      dueDate: '',
      labels: '',
    });

    const handleCreateCard = () => {
        if (newCard.title.trim() === '' || newCard.description.trim() === '') {
            toast.error('Please enter a title and/or a description for the card.');
            return;
          }
          
          if (newCard.comments.trim() === '' || newCard.dueDate.trim() === '' || newCard.labels.trim() === '') {
            toast.error('Please enter a comment, a due date and/or a label for the card.');
            return;
          }
          
          
      onCreateCard(newCard);
      setNewCard({
        title: '',
        description: '',
        comments: '',
        dueDate: '',
        labels: '',
      });
      onClose();
      toast.success('Card created successfully!')
    };


    const handleCancel = () => {
        setNewCard({
          title: '',
          description: '',
          comments: '',
          dueDate: '',
          labels: '',
        });
        onClose();
      };

      
    return (
        <div className="overlay modal">
        <div className="modal-content">
          <span className="close-btn" onClick={onClose}></span>
          <h3>Create a New Card</h3>
          <div>
          <input
            type="text"
            placeholder="Card Title"
            value={newCard.title}
            onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
          />
          </div>
          <div>
          <textarea
            placeholder="Card Description"
            value={newCard.description}
            onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
          />
          </div>
          <div>
          <input
            type="text"
            placeholder="Comments"
            value={newCard.comments}
            onChange={(e) => setNewCard({ ...newCard, comments: e.target.value })}
          />
          </div>
          <div>
          <input
            type="date"
            value={newCard.dueDate}
            onChange={(e) => setNewCard({ ...newCard, dueDate: e.target.value })}
          />
          </div>
          <div>
          <input
            type="text"
            placeholder="Labels"
            value={newCard.labels}
            onChange={(e) => setNewCard({ ...newCard, labels: e.target.value })}
          />
          </div>
          <div className="button-container">
          <button onClick={handleCreateCard}>Create Card</button>
          <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddCardModal;
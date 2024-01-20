function Card({ title, description, comments, dueDate, labels }) {
    return (
      <div className="card">
        <h4>{title}</h4>
        <p>Description: {description}</p>
        <p>Comments: {comments.join(', ')}</p>
        <p>Due Date: {dueDate}</p>
        <p>Labels: {labels.join(', ')}</p>
      </div>
    );
  }
  
  export default Card;
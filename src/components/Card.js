import React from 'react';
import './Card.css';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        <button className="card-button">Read More</button>
      </div>
    </div>
  );
};

export default Card; 
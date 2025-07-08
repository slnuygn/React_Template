import React from 'react';
import './Card.css';

const Card = ({ title, content, imageUrl, phone }) => {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl}  />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-content-wrapper">
          <span className="location-icon">📍</span>
          <p className="card-content">{content}</p>
        </div>
        <div className="card-phone-wrapper">
          <span className="phone-icon">📞</span>
          <p className="card-phone">{phone}</p>
        </div>
        <button className="card-button">Navigate</button>
      </div>
    </div>
  );
};

export default Card; 
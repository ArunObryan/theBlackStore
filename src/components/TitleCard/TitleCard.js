import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TitleCard.css';

const TitleCard = ({ isClickable = false, compact = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClickable) {
      navigate('/');
    }
  };

  return (
    <div 
      className={`title-card ${compact ? 'title-card-compact' : ''} ${isClickable ? 'title-card-clickable' : ''}`}
      onClick={handleClick}
    >
      <div className="title-card-content">
        <h1 className="title-main">TheBlackStore</h1>
        {!compact && <p className="title-subtitle">Where Elegance Meets Darkness</p>}
        <div className="title-accent"></div>
      </div>
    </div>
  );
};

export default TitleCard;


import React from 'react';
import './Card.css';

function Card({ title, content, imageUrl, onClick }) {
  return (
    <div className="card" onClick={onClick}> {/* 클릭 이벤트 추가 */}
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

export default Card;

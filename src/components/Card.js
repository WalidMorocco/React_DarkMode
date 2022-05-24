import React from 'react';

const Card = ({ children, style }) => {
  return (
    <div className="card">
      <div className="card-container" style={style}>
        {children}
      </div>
    </div>
  );
};

export default Card;

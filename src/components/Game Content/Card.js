import React from "react";

function Card({ imageUrl, onClick }) {
  const handleClick = () => {
    onClick(imageUrl);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt="Character Card" />
    </div>
  );
}

export default Card;

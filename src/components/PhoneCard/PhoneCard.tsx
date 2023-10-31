import React, { useState } from 'react';
// import Apple11ProMax from '../../../01.jpg';
import './sass/PhoneCard.scss';

export const PhoneCard = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAdd = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="phoneCard">
      {/* <img
        src={Apple11ProMax}
        alt="apple 11 pro max"
        className="phoneCard__image"
      /> */}
      <h2 className="phoneCard__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>
      <div className="phoneCard__price">
        <p className="phoneCard__price__current">$799</p>
        <p className="phoneCard__price__old">$1199</p>
      </div>

      <div className="phoneCard__description">
        <div>
          <p className="phoneCard__description--left">Screen</p>
          <p className="phoneCard__description--left">Capacity</p>
          <p className="phoneCard__description--left">RAM</p>
        </div>
        <div>
          <p className="phoneCard__description--right">6.5” OLED</p>
          <p className="phoneCard__description--right">64 GB</p>
          <p className="phoneCard__description--right">4 GB</p>
        </div>
      </div>

      <div className="phoneCard__buttons">
        <button
          type="button"
          onClick={handleAdd}
          className={`phoneCard__add ${isAdded ? 'phoneCard__add--added' : ''}`}
        >
          {isAdded ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          type="button"
          onClick={handleLike}
          className={`phoneCard__heart ${
            isLiked ? 'phoneCard__heart--liked' : ''
          }`}
        >
          {' '}
        </button>
      </div>
    </div>
  );
};

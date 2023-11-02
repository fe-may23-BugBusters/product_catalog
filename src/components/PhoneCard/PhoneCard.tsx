/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
// import Apple11ProMax from '../../../01.jpg';
import './sass/PhoneCard.scss';

type Props = {
  category: string;
  phoneid: string;
  itemid: string;
  name: string;
  fullprice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: string;
  image: string;
};

export const PhoneCard: React.FC<Props> = ({
  category,
  phoneid,
  itemid,
  name,
  fullprice,
  price,
  screen,
  capacity,
  color,
  ram,
  year,
  image,
}) => {
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
      <img
        src={image}
        alt={`We are trying to get a pic of: ${name}...`}
        className="phoneCard__image"
      />
      <h2 className="phoneCard__title">{name}</h2>
      <div className="phoneCard__price">
        <p className="phoneCard__price__current">
          {price}
          $
        </p>
        <p className="phoneCard__price__old">
          {fullprice}
          $
        </p>
      </div>

      <div className="phoneCard__description">
        <div>
          <p className="phoneCard__description--left">Screen</p>
          <p className="phoneCard__description--left">Capacity</p>
          <p className="phoneCard__description--left">RAM</p>
        </div>
        <div>
          <p className="phoneCard__description--right">{screen}</p>
          <p className="phoneCard__description--right">{capacity}</p>
          <p className="phoneCard__description--right">{ram}</p>
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

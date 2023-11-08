/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './sass/ActionsVariants.scss';
import { useTContext, TypeContext } from '../../context/Context';
import { Product } from '../../types/product';

type Props = {
  price_regular: string;
  price_discount: string;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  colors_available: string[];
  capacity_available: string[];
};

export const ActionsVariants: React.FC<Props> = ({
  price_discount,
  price_regular,
  screen,
  capacity,
  color,
  ram,
  colors_available,
  capacity_available,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const { cart, setCart } = useTContext() as TypeContext;
  const [chosenColor, setChosenColor] = useState<string>(colors_available[0]);

  const handleColorChange = (newColor:string) => {
    setChosenColor(newColor);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  //   const conditionToAdd = !cart.some((item) => item.id === product.id);

  //   const handleAdd = () => {
  //     const productWithQuantity = {
  //       ...product,
  //       quantity: 1,
  //     };

  //     if (!isAdded && conditionToAdd) {
  //       setCart([...cart, productWithQuantity]);
  //       setIsAdded(!isAdded);
  //     }
  //   };

  return (
    <>
      <section className="actions__sec">
        <p>Available colors</p>
        <div className="actions__buttons">
          {colors_available.map((col) => (
            <button
              key={col}
              onClick={() => handleColorChange}
              style={{ backgroundColor: col }}
              type="button"
              className="actions__color"
            />
          ))}
        </div>
      </section>

      <section className="actions__sec">
        <p>Available capacity</p>
        <div className="actions__buttons">
          {capacity_available.map((cap) => (
            <button
              type="button"
              key={cap}
              className="actions__capacity"
            >
              {cap}
            </button>
          ))}
        </div>
      </section>
      <div className="phoneCard__price">
        {price_discount && (
          <>
            <p className="phoneCard__price__current">
              {price_discount}
              $
            </p>
            <p className="phoneCard__price__old">
              {price_regular}
              $
            </p>
          </>
        )}
        {!price_discount && (
          <>
            <p className="phoneCard__price__current">
              {price_regular}
              $
            </p>
          </>
        )}
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
          //   onClick={handleAdd}
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
    </>
  );
};

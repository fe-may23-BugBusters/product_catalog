/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sass/ActionsVariants.scss';
import { useTContext, TypeContext } from '../../context/Context';
import { Product, ProductExtended } from '../../types/product';

type Props = {
  price_regular: string;
  price_discount: string;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  colors_available: string[];
  capacity_available: string[];
  product: ProductExtended;
  name:string;
  id: string;
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
  product,
  name,
  id,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const { cart, setCart } = useTContext() as TypeContext;
  const [chosenColor, setChosenColor] = useState<string>(colors_available[0]);
  const { opened, setOpened } = useTContext() as TypeContext;
  const { favourites, setFavourites } = useTContext() as TypeContext;

  const handleAdd = () => {
    const prodToAdd = opened.find((prod) => (prod.itemid === product.id)) as Product;

    const adding = {
      ...prodToAdd,
      quantity: 1,
    };

    setCart((prevCart) => [...prevCart, adding]);
    setIsAdded(!isAdded);
  };

  const handleLike = () => {
    const prodToLike = opened.find((prod) => (prod.itemid === product.id)) as Product;

    setFavourites([...favourites, prodToLike]);
    setIsLiked(!isLiked);
  };

  const nameLink = id.split('-').slice(0, -2).join('-');

  useEffect(() => {
    setIsLiked(false);
    setIsAdded(false);
    setChosenColor(colors_available[0]);
  }, [colors_available]);

  const handleCapacityClick = (selectedCapacity: string) => {
    const newPath = `#/phoneinfo/${nameLink}-${selectedCapacity.toLowerCase()}-${encodeURIComponent(color.toLowerCase())}`;

    window.location.href = newPath;
  };

  const handleColorClick = (selectedColor: string) => {
    const newPath = `#/phoneinfo/${nameLink}-${capacity.toLowerCase()}-${encodeURIComponent(selectedColor.toLowerCase())}`;

    window.location.href = newPath;
  };

  return (
    <>
      <section className="actions__sec">
        <p>Available colors</p>
        <div className="actions__buttons">
          {colors_available.map((col) => (
            <button
              key={col}
              onClick={() => handleColorClick(col)}
              style={{ backgroundColor: col }}
              type="button"
              className="actions__color"
            />
          ))}
        </div>
      </section>

      <section className="actions__sec">
        <p>Select capacity</p>
        <div className="actions__buttons">
          {capacity_available.map((cap) => (
            <button type="button" key={cap} className="actions__capacity" onClick={() => handleCapacityClick(cap)}>
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
      <div className="phoneCard__buttons actions__buts">
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
    </>
  );
};

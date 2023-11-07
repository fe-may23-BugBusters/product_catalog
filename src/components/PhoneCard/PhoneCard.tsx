import React, { SetStateAction, useState } from 'react';
import './sass/PhoneCard.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { useTContext, TypeContext } from '../../context/Context';

type Props = {
  name: string;
  itemid: string;
  fullprice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: string;
  image: string;
  product: Product;
  is_discounted: boolean;
};

export const PhoneCard: React.FC<Props> = ({
  name,
  itemid,
  fullprice,
  price,
  screen,
  capacity,
  color,
  ram,
  year,
  image,
  product,
  is_discounted,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const { cart, setCart } = useTContext() as TypeContext;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const conditionToAdd = !cart.some((item) => item.id === product.id);

  const handleAdd = () => {
    const productWithQuantity = {
      ...product,
      quantity: 1,
    };

    if (!isAdded && conditionToAdd) {
      setCart([...cart, productWithQuantity]);
      setIsAdded(!isAdded);
    }
  };

  return (
    <div className="phoneCard">
      <Link to={`/phoneinfo/${itemid}`} className="phoneCard__link">
        <img
          // eslint-disable-next-line import/no-dynamic-require, global-require
          src={require(`../../${image}`)}
          alt={`We are trying to get a pic of: ${name}...`}
          className="phoneCard__image"
        />
      </Link>
      <h2 className="phoneCard__title">{name}</h2>
      <div className="phoneCard__price">
        {is_discounted && (
          <>
            <p className="phoneCard__price__current">
              {price}
              $
            </p>
            <p className="phoneCard__price__old">
              {fullprice}
              $
            </p>
          </>
        )}
        {!is_discounted && (
          <>
            <p className="phoneCard__price__current">
              {fullprice}
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

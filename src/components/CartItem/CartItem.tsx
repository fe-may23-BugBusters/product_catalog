/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './sass/CartItem.scss';
import { useTContext, TypeContext } from '../../context/Context';
import { Product } from '../../types/product';

type Props = {
  name: string;
  // fullprice: number;
  price: number;
  image: string;
  product: Product;
};

export const CartItem: React.FC<Props> = ({
  name,
  // fullprice,
  price,
  image,
  product,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { cart, setCart } = useTContext() as TypeContext;

  const handleIncrease = () => {
    setCart([...cart, product]);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    handleIncrease();
  };

  const removeItemFromCart = () => {
    /* tutaj funkcja dla usuwania */
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__info">
          <button
            type="button"
            className="cartItem__info__close"
            onClick={removeItemFromCart}
          />
          <img src={require(`../../${image}`)} alt="iphone" className="cartItem__info__img" />
          <h2 className="cartItem__info__name">
            {name}
          </h2>
        </div>

        <div className="cartItem__calc">
          <button
            type="button"
            onClick={decreaseQuantity}
            className={`cartItem__calc__minus cartItem__calc__quantity ${
              quantity === 1 ? 'inactive' : ''
            }`}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            type="button"
            onClick={increaseQuantity}
            className="cartItem__calc__plus cartItem__calc__quantity"
          >
            +
          </button>
          <p className="cartItem__calc__price">
            {price}
            $
          </p>
        </div>
      </div>
    </>
  );
};

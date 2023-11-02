import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chevron from '../../icons/chevron-left.svg';
import './sass/Cart.scss';
import { Product } from '../../types/product';

type CartItem = {
  quantity: number;
};

export const Cart: React.FC<CartItem> = ({ quantity }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const calculatePrice = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.price * quantity;
    }, 0);
  };

  /* quantity teoretycznie do pobrania z pojedynczej kartki, jest tam zmieniane przyciskami + -*/

  return (
    <>
      <div className="cart">
        <section className="cart__title">
          <Link to="/phones" className="cart__title__link">
            <img
              src={Chevron}
              alt="arrow right"
              className="cart__title__link__arrow"
            />
            <p className="cart__title__link__back">Back</p>
          </Link>
          <h1 className="cart__title__word">Cart</h1>
        </section>
        <div className="cart__main">
          <section className="cart__cartItems">{/* place for cards */}</section>
          <section className="cart__calculator">
            <div className="cart__calculator__price-container">
              <p className="cart__calculator__price">
                {`$
                ${calculatePrice()}
                `}
              </p>
              <p className="cart__calculator__total">Total for 3 products</p>
            </div>

            <div className="cart__calculator__line" />
            <div className="cart__calculator__button-container">
              <button type="button" className="cart__calculator__checkout">
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

/* eslint-disable */

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Chevron from '../../icons/chevron-left.svg';
import { useTContext, TypeContext } from '../../context/Context';
import './sass/Cart.scss';
import { Product } from '../../types/product';
import { CartItem } from '../CartItem/CartItem';
import CheckoutPage from '../CheckoutPage/Checkout';

export const Cart = () => {
  const { cart } = useTContext() as TypeContext;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTotalPrice = (itemsInCart: Product[]) => {
    return itemsInCart.reduce((total, cartItem) => {
      if (cartItem.quantity !== undefined) {
        return total + cartItem.price * cartItem.quantity;
      }

      return total;
    }, 0);
  };

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
          <section className="cart__cartItems">
            {cart.map(
              (product) =>
                product.quantity && (
                  <CartItem
                    key={product.name}
                    name={product.name}
                    // fullprice={product.fullprice}
                    price={product.price}
                    image={product.image}
                    product={product}
                    quantity={product.quantity}
                  />
                ),
            )}
          </section>
          <section className="cart__calculator">
            <div className="cart__calculator__price-container">
              <p className="cart__calculator__price">
                {`$
                ${calculateTotalPrice(cart)}
                `}
              </p>
              <p className="cart__calculator__total">
                {`Total for ${cart.length} `}
                {cart.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className="cart__calculator__line" />
            <div className="cart__calculator__button-container">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="cart__calculator__checkout"
              >
                Checkout
              </button>
              {isModalOpen ? <CheckoutPage /> : ''}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

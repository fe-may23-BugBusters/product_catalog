/* eslint-disable */

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Chevron from '../../icons/chevron-left.svg';
import { useTContext, TypeContext } from '../../context/Context';
import './sass/Orders.scss';
import { Product } from '../../types/product';
import { Order } from '../Order/Order';

export const Orders = () => {
  const { cart } = useTContext() as TypeContext;

  return (
    <div className="orders">
      <section className="orders__title">
        <Link to="/cart" className="orders__title__link">
          <img
            src={Chevron}
            alt="arrow right"
            className="orders__title__link__arrow"
          />
          <p className="orders__title__link__back">Back</p>
        </Link>
        <h1 className="orders__title__word">Orders</h1>
      </section>
      <section className="cart__cartItems">
        {cart.map((product) => product.quantity && <Order />)}
      </section>
    </div>
  );
};

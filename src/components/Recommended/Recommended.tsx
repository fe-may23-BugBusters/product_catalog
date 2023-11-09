/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Product } from '../../types/product';
import './sass/Recommended.scss';

export const Recommended = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="recommended" />
      <div className="recommended__container">
        <h2 className="recommended__title">You may also like</h2>
        <div className="recommended__buttons">
          <button type="button" className="recommended__buttons__left" />
          <button type="button" className="recommended__buttons__right" />
        </div>
      </div>

      <div className="recommended__cards">
        {!loading
          ? products.map((product) => (
            <div className="recommended__cards__card" key={product.id}>
              <PhoneCard
                key={product.name}
                name={product.name}
                itemid={product.itemid}
                fullprice={product.fullprice}
                price={product.price}
                screen={product.screen}
                capacity={product.capacity}
                color={product.color}
                ram={product.ram}
                year={product.year}
                image={product.image}
                product={product}
                is_discounted={product.is_discounted}
                isAddedToCart={product.isAddedToCart}
                isLiked={product.isAddedToCart}
                wasOpened={product.wasOpened}
              />
            </div>
          ))
          : 'Loading...'}
      </div>
    </>
  );
};

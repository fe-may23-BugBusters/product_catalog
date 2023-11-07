/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Product } from '../../types/product';
import './sass/Recommended.scss';

export const Recommended = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://product-catalog-be-6qo2.onrender.com/products?pageNumber=${
          currentPage - 1
        }`,
      );

      setProducts(response.data.rows);
      setLoading(false);
    };

    loadProducts();
  }, [currentPage]);

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
                name={product.name}
                fullprice={product.fullprice}
                price={product.price}
                screen={product.screen}
                capacity={product.capacity}
                color={product.color}
                ram={product.ram}
                year={product.year}
                image={product.image}
                product={product}
              />
            </div>
          ))
          : 'Loading...'}
      </div>
    </>
  );
};

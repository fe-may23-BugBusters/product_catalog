/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sass/Favourites.scss';
import Home from '../../icons/Home.svg';
import ArrowRight from '../../icons/Chevron (Arrow Right).svg';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { TypeContext, useTContext } from '../../context/Context';
// import { Product } from '../../types/product';

export const Favourites = () => {
  const { favourites } = useTContext() as TypeContext;

  return (
    <>
      <main className="favourites">
        <div className="favourites__current">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <img
              src={Home}
              alt="home icon"
              className="favourites__current__icon"
            />
          </a>
          <img
            src={ArrowRight}
            alt="arrow right"
            className="favourites__current__icon"
          />
          <p className="favourites__current__text">Favourites</p>
        </div>
        <h1 className="favourites__title">Favourites</h1>
        <p className="favourites__text favourites__text--models">
          {(favourites.length > 1) && (
            <p>
              {`${favourites.length}`}
              {' '}
              items
            </p>
          )}
          {(favourites.length <= 1) && (
            <p>
              {`${favourites.length}`}
              {' '}
              item
            </p>
          )}
        </p>

        <div className="product-card__container">
          {favourites.map((product) => (
            <div className="product-card" key={product.id}>
              {/* <Link to={`/product/${product.id}`}> */}
              {' '}
              {/* Przekierowanie do strony produktu */}
              <PhoneCard
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
              />
              {/* </Link> */}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import cn from 'classnames';
import './sass/PhonesPage.scss';
import Home from '../../icons/Home.svg';
import ArrowRight from '../../icons/Chevron (Arrow Right).svg';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Pagination } from '../Pagination/Pagination';
import { Product } from '../../types/product';

export const PhonesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios
        .get(`https://product-catalog-be-6qo2.onrender.com/products?pageNumber=${currentPage - 1}`);

      setProducts(response.data.rows);
      console.log(response.data.count, response.data.rows);
      setTotalPosts(response.data.count);
      setLoading(false);
    };

    loadProducts();
  }, [currentPage]);

  const numberOfPages = Math.ceil(totalPosts / postPerPage);

  return (
    <>
      <main className="phonePage">
        <div className="phonePage__current">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">
            <img
              src={Home}
              alt="home icon"
              className="phonePage__current__icon"
            />
          </a>
          <img
            src={ArrowRight}
            alt="arrow right"
            className="phonePage__current__icon"
          />
          <p className="phonePage__current__text">Phones</p>
        </div>
        <h1 className="phonePage__title">Mobile Phones</h1>
        <p className="phonePage__text phonePage__text--models">95 models</p>

        <div className="phonePage__select phonePage__select--1">
          <label
            htmlFor="sort-by"
            className="phonePage__text phonePage__select__text"
          >
            Sort by
          </label>
          <select
            name="sort-by"
            id="sort-by"
            className="phonePage__select__field"
          >
            <option className="phonePage__select__option">Newest</option>
          </select>
        </div>

        <div className="phonePage__select phonePage__select--2">
          <label
            htmlFor="items-on-page"
            className="phonePage__text phonePage__select__text"
          >
            Items on Page
          </label>
          <select
            name="items-on-page"
            id="items-on-page"
            className="phonePage__select__field"
            onClick={(e) => {
              const target = e.target as HTMLSelectElement;
              const value = parseInt(target.value, 10);

              setPostPerPage(value);
            }}
          >
            <option value="16" className="phonePage__select__option">
              16
            </option>
          </select>
        </div>
        {!loading
          ? products.map((product) => (
            <div className="product-card" key={product.id}>
              <PhoneCard
                name={product.name}
                category={product.category}
                phoneid={product.phoneid}
                itemid={product.itemid}
                fullprice={product.fullprice}
                price={product.price}
                screen={product.screen}
                capacity={product.capacity}
                color={product.color}
                ram={product.ram}
                year={product.year}
                image={product.image}
              />
            </div>

          ))
          : 'Loading...'}
      </main>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    </>
  );
};

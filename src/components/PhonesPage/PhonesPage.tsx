/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import './sass/PhonesPage.scss';
import Home from '../../icons/Home.svg';
import ArrowRight from '../../icons/Chevron (Arrow Right).svg';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Pagination } from '../Pagination/Pagination';

export const PhonesPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(16);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get('https://');

      setProducts(response.data);
      setTotalPosts(response.data.length);
      setLoading(false);
    };

    loadProducts();
  });

  const indexOfLastProduct = currentPage * postPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postPerPage;
  const currentPageProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  // const numberOfPages = totalPosts / postPerPage;
  const numberOfPages = 8;

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
            <option value="16" className="phonePage__select__option">16</option>
          </select>
        </div>
        {!loading
          ? currentPageProducts.map((product) => (
            // <PhoneCard key={product.id} />
            <p key="1" />
          ))
          : 'Loading...'}
        <div className="product-card product-card--1">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
        <div className="product-card">
          <PhoneCard />
        </div>
      </main>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    </>
  );
};

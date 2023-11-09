/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sass/PhonesPage.scss';
import Home from '../../icons/Home.svg';
import ArrowRight from '../../icons/Chevron (Arrow Right).svg';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Pagination } from '../Pagination/Pagination';
import { Product } from '../../types/product';

const supportedSortByOrder = ['fullprice', 'id', 'year'];

export const PhonesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(16);
  const [totalPosts, setTotalPosts] = useState(0);
  const [orderBy, setOrderBy] = useState('year');
  const [order, setOrder] = useState('asc');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      if (!supportedSortByOrder.includes(orderBy)) {
        console.error(`Sortowanie po polu ${orderBy} nie jest obsługiwane.`);
        setLoading(false);

        return;
      }

      try {
        const response = await axios.get(
          `https://product-catalog-be-6qo2.onrender.com/products?pageNumber=${currentPage}&perPage=${perPage}&orderBy=${orderBy}&order=${order}&search=${search}`,
        );

        setProducts(response.data.rows);
        setTotalPosts(response.data.count);
        setLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania produktów:', error);
        setLoading(false);
      }
    };

    loadProducts();
  }, [currentPage, perPage, orderBy, order, search]);

  const numberOfPages = Math.ceil(totalPosts / perPage);

  const toggleOrder = () => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';

    setOrder(newOrder);
  };

  return (
    <>
      <main className="phonePage">
        <div className="phonePage__current">
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

        <div className="phonePage__select phonePage__select--1">
          <label
            htmlFor="sort-by"
            className="phonePage__text phonePage__select__text"
          >
            Sort by:
          </label>
          <select
            name="sort-by"
            id="sort-by"
            className="phonePage__select__field"
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="year">Year</option>
            <option value="fullprice">Price</option>
            <option value="id">ID</option>
          </select>
          <button onClick={toggleOrder}>Toggle ASC/DESC</button>
        </div>

        <div className="product-card__container">
          {!loading
            ? products.map((product) => (
              <div className="product-card" key={product.id}>
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
              </div>
            ))
            : 'Loading...'}
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

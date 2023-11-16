/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
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
  const [orderBy, setOrderBy] = useState('id');
  const [order, setOrder] = useState('ASC');
  const [search, setSearch] = useState('');
  const [numberOfPages, setNumberOfPages] = useState<number>(1);

  useEffect(() => {
    const numberOfPagesChange = Math.ceil(totalPosts / perPage);

    setNumberOfPages(numberOfPagesChange);
    setCurrentPage(1);
  }, [perPage, totalPosts]);

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
          `${
            process.env.REACT_APP_SERWER
          }products?perPage=${perPage}&pageNumber=${
            currentPage - 1
          }&orderBy=${orderBy}&order=${order}`,
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

  const toggleOrder = () => {
    const newOrder = order === 'ASC' ? 'DESC' : 'ASC';

    setOrder(newOrder);
  };

  const override: any = {
    alignSelf: 'center',
    position: 'absolute',
    left: '50vW',
    marginTop: '40px',
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
        <div className="phonePage__select_cont">
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
          </div>
          <div className="phonePage__select phonePage__select--1">
            <label
              htmlFor="order"
              className="phonePage__text phonePage__select__text"
            >
              Order:
            </label>
            <button
              type="button"
              id="order"
              name="order"
              className="phonePage__select__field"
              onClick={() => toggleOrder()}
            >
              {order === 'ASC' ? 'Ascending' : 'Descending'}
            </button>
          </div>

          <div className="phonePage__select phonePage__select--1">
            <label
              htmlFor="item-per-page"
              className="phonePage__text phonePage__select__text"
            >
              Items per page:
            </label>
            <select
              name="items-per-page"
              id="items-per-page"
              className="phonePage__select__field"
              value={String(perPage)}
              onChange={(e) => setPerPage(+e.target.value)}
            >
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select>
          </div>
          {/* <div className="phonePage__select phonePage__select--1">
            <label
              htmlFor="search"
              className="phonePage__text phonePage__select__text"
            >
              Search by name:
            </label>
            <input
              type="text"
              id="searach"
              name="search"
              value={search}
              className="phonePage__select__field"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}
        </div>
        <div className="product-card__container">
          {!loading ? (
            products.map((product) => (
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
                  wasOpened={product.wasOpened}
                />
              </div>
            ))
          ) : (
            <PropagateLoader color="#0F0F11" cssOverride={override} />
          )}
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

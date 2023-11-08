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
  const [postPerPage, setPostPerPage] = useState(16);
  const [totalPosts, setTotalPosts] = useState(0);
  const [sortType, setSortType] = useState('year-asc');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const sortTypeParts = sortType.split('-');
      const sortField = sortTypeParts[0];
      const sortOrder = sortTypeParts[1];

      if (!supportedSortByOrder.includes(sortField)) {
        console.error(`Sortowanie po polu ${sortField} nie jest obsługiwane.`);
        setLoading(false);

        return;
      }

      const response = await axios.get(
        `https://product-catalog-be-6qo2.onrender.com/products?pageNumber=${currentPage - 1}&pageSize=${postPerPage}&sortField=${sortField}&sortOrder=${sortOrder}`,
      );

      setProducts(response.data.rows);
      setTotalPosts(response.data.count);
      setLoading(false);
    };

    loadProducts();
  }, [currentPage, postPerPage, sortType]);

  const numberOfPages = Math.ceil(totalPosts / postPerPage);

  const toggleSortType = () => {
    const sortTypeParts = sortType.split('-');
    const newSortOrder = sortTypeParts[1] === 'asc' ? 'desc' : 'asc';

    setSortType(`${sortTypeParts[0]}-${newSortOrder}`);
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
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="year-asc">Year: Ascending</option>
            <option value="year-desc">Year: Descending</option>
            <option value="fullprice-asc">Price: Ascending</option>
            <option value="fullprice-desc">Price: Descending</option>
          </select>
          <button onClick={toggleSortType}>Toggle ASC/DESC</button>
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

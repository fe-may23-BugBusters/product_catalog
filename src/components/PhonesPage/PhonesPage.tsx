/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  const [sortType, setSortType] = useState('newest');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://product-catalog-be-6qo2.onrender.com/products?pageNumber=${currentPage - 1}&pageSize=${postPerPage}&sort=${sortType}`,
      );

      setProducts(response.data.rows);
      setTotalPosts(response.data.count);
      setLoading(false);
    };

    loadProducts();
  }, [currentPage, postPerPage, sortType]);

  const numberOfPages = Math.ceil(totalPosts / postPerPage);

  const sortProducts = () => {
    switch (sortType) {
      case 'price-low-to-high':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'price-high-to-low':
        return products.slice().sort((a, b) => b.price - a.price);
      case 'ram':
        return products.slice().sort((a, b) => a.ram.localeCompare(b.ram));
      case 'model':
        return products.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'color':
        return products.slice().sort((a, b) => a.color.localeCompare(b.color));
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts();

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

        <h1 className="phonePage__title">Mobile Phones</h1>
        <p className="phonePage__text phonePage__text--models">95 models</p>

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
            <option value="newest">Newest</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="ram">RAM</option>
            <option value="model">Model</option>
            <option value="color">Color</option>
          </select>
        </div>

        <div className="phonePage__select phonePage__select--2">
          <label
            htmlFor="items-on-page"
            className="phonePage__text phonePage__select__text"
          >
            Items on Page:
          </label>
          <select
            name="items-on-page"
            id="items-on-page"
            className="phonePage__select__field"
            value={postPerPage}
            onChange={(e) => setPostPerPage(Number(e.target.value))}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
          </select>
        </div>

        <div className="product-card__container">
          {!loading
            ? sortedProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`}>
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
                  />
                </Link>
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

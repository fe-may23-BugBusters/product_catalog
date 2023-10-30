import React from 'react';
import './PhonesPage.scss';
import Home from '../../icons/Home.svg';
import ArrowRight from '../../icons/Chevron (Arrow Right).svg';
import { PhoneCard } from './CardLayout/PhoneCard';

function PhonesPage() {
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
          >
            <option className="phonePage__select__option">16</option>
          </select>
        </div>

        <div className="product-card product-card--1"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
        <div className="product-card"><PhoneCard /></div>
      </main>
    </>
  );
}

export default PhonesPage;

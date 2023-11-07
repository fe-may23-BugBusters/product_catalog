/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../../types/product';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './sass/HomePage.scss';
import { Promo } from '../Promo/Promo';

export const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);
  const [newModels, setNewModels] = useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [discounted, setDiscounted] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response1 = await axios.get(
        'https://product-catalog-be-6qo2.onrender.com/products/new',
      );
      const response2 = await axios.get(
        'https://product-catalog-be-6qo2.onrender.com/products/new',
      );

      setNewModels(response1.data);
      console.log(response1.data);
      setDiscounted(response2.data);
      console.log(response2.data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1001 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1000, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 501 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({
    next, previous, goToSlide, ...rest
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="home_carousel-button-group">
        <button
          className="home_carousel-button-group-left"
          onClick={() => previous()}
          aria-label="button"
          type="button"
        >
          {/* {'<'} */}
        </button>
        <button
          className="home_carousel-button-group-right"
          onClick={() => next()}
          type="button"
        >
          {/* {'>'} */}
        </button>
      </div>
    );
  };

  return (
    <div className="home">
      <h1 className="home_title" id="header">Welcome to Nice Gadgets store!</h1>
      <div className="home_promo">
        <Promo />
      </div>
      <h1 className="home_h1">
        Brand new models
      </h1>
      <div className="home_newModelsSlider">
        <Carousel
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {newModels.map((product) => (
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
          ))}
        </Carousel>
      </div>
      <h1 className="home_h1">
        Shop by category
      </h1>
      <div className="home_category">
        <div className="home_category_container">
          <div className="home_category_mobile home_category_div">
            <img
              className="home_category_image-1 home_category_image"
              src={require('../../img/banner/category-phones.png')}
              alt="trying to load..."
            />
          </div>
          <h3 className="home_category_h3">
            Mobile phones
          </h3>
          <p className="home_category_p">
            95 models
          </p>
        </div>
        <div className="home_category_container">
          <div className="home_category_tablets home_category_div">
            <img
              className="home_category_image-2 home_category_image"
              src={require('../../img/banner/category-tablets.png')}
              alt="trying to load..."
            />
          </div>
          <h3 className="home_category_h3">
            Tablets
          </h3>
          <p className="home_category_p">
            24 models
          </p>
        </div>
        <div className="home_category_container">
          <div className="home_category_accesories home_category_div">
            <img
              className="home_category_image-3 home_category_image"
              src={require('../../img/banner/category-accessories.png')}
              alt="trying to load..."
            />
          </div>
          <h3 className="home_category_h3">
            Accessories
          </h3>
          <p className="home_category_p">
            100 models
          </p>
        </div>
      </div>
      <h1 className="home_h1">
        Hot prices
      </h1>
      <div className="home_newModelsSlider">
        <Carousel
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {discounted.map((product) => (
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
          ))}
        </Carousel>
      </div>
    </div>
  );
};

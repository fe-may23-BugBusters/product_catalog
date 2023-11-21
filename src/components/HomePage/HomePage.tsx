/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import './sass/HomePage.scss';
import { Promo } from '../Promo/Promo';
import { TypeContext, useTContext } from '../../context/Context';

export const HomePage = () => {
  const { setHasId } = useTContext() as TypeContext;
  const { setCart } = useTContext() as TypeContext;
  const { setFavourites } = useTContext() as TypeContext;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [discounted, setDiscounted] = useState<Product[]>([]);

  useEffect(() => {
    const recovery = async () => {
      try {
        const exists = await axios.get(
          'https://product-catalog-be-6qo2.onrender.com/recovery',
          { withCredentials: true },
        );

        if (exists.status === 200) {
          setHasId(true);
          const { fav, cart } = exists.data.resorces;
          // Use Promise.all to wait for all asynchronous operations to complete
          let promisesFav = [];

          promisesFav = fav.map(async (element: string) => {
            const clean = element.slice(1, -1);
            const product = await axios.get(
              `https://product-catalog-be-6qo2.onrender.com/recovery/${clean}`,
            );

            return {
              ...product.data,
              isLiked: true,
            };
          });

          const promisesCart = cart.map(async (element: string) => {
            const clean = Object.keys(element)[0];
            const product = await axios.get(
              `https://product-catalog-be-6qo2.onrender.com/recovery/${clean}`,
            );
            const quantity = Object.values(element)[0];

            return {
              ...product.data,
              quantity,
              isAddedToCart: true,
            };
          });

          const productsLiked = await Promise.all(promisesFav);
          const productsCart = await Promise.all(promisesCart);

          setFavourites([...productsLiked]);
          setCart([...productsCart]);
        }
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };

    const loadProducts = async () => {
      setLoading(true);
      const response1 = await axios.get(
        `${process.env.REACT_APP_SERWER}${'products/new'}`,
      );
      const response2 = await axios.get(
        `${process.env.REACT_APP_SERWER}${'products/discounted'}`,
      );

      setNewModels(response1.data);
      setDiscounted(response2.data);
      setLoading(false);
    };

    loadProducts();
    recovery();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1401 },
      items: 4.5,
    },
    largeDesktop: {
      breakpoint: { max: 1400, min: 1201 },
      items: 3.5,
    },
    desktop: {
      breakpoint: { max: 1200, min: 940 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 939, min: 780 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 779, min: 640 },
      items: 2,
    },
    mobilemin: {
      breakpoint: { max: 639, min: 471 },
      items: 1.5,
    },
    mobileminmin: {
      breakpoint: { max: 470, min: 0 },
      items: 1.1,
    },
  };

  const ButtonGroup = ({
    next,
    previous,
    goToSlide,
    ...rest // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const override: any = {
    alignSelf: 'center',
    position: 'absolute',
    left: '44vW',
  };

  return (
    <div className="home">
      <div className="home_title_container">
        <h1 className="home_title" id="header">
          Welcome to Nice Gadgets store!
        </h1>
      </div>
      <div className="home_promo">
        <Promo />
      </div>
      <h1 className="home_h1">Brand new models</h1>
      <div className="home_newModelsSlider">
        {loading && newModels.length === 0 && (
          <div className="home_newModelSlider-loader">
            {/* <p>Loading in progress...</p> */}
            <PropagateLoader color="#0F0F11" cssOverride={override} />
          </div>
        )}
        <Carousel
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite
          keyBoardControl
          customTransition="all .5"
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
              isAddedToCart={product.isAddedToCart}
              isLiked={product.isAddedToCart}
              wasOpened={product.wasOpened}
            />
          ))}
        </Carousel>
      </div>
      <h1 className="home_h1">Shop by category</h1>
      <div className="home_category">
        <div className="home_category_container">
          <div className="home_category_mobile home_category_div">
            <Link to="/phones">
              <img
                className="home_category_image-1 home_category_image"
                src={require('../../img/banner/category-phones.png')}
                alt="trying to load..."
              />
            </Link>
          </div>
          <h3 className="home_category_h3">Mobile phones</h3>
          <p className="home_category_p">95 models</p>
        </div>
        <div className="home_category_container">
          <div className="home_category_tablets home_category_div">
            <Link to="/tablets">
              <img
                className="home_category_image-2 home_category_image"
                src={require('../../img/banner/category-tablets.png')}
                alt="trying to load..."
              />
            </Link>
          </div>
          <h3 className="home_category_h3">Tablets</h3>
          <p className="home_category_p">24 models</p>
        </div>
        <div className="home_category_container">
          <div className="home_category_accesories home_category_div">
            <Link to="/accessories">
              <img
                className="home_category_image-3 home_category_image"
                src={require('../../img/banner/category-accessories.png')}
                alt="trying to load..."
              />
            </Link>
          </div>
          <h3 className="home_category_h3">Accessories</h3>
          <p className="home_category_p">100 models</p>
        </div>
      </div>
      <h1 className="home_h1">Hot prices</h1>
      <div className="home_newModelsSlider">
        {loading && newModels.length === 0 && (
          <div className="home_newModelSlider-loader">
            {/* <p>Loading in progress...</p> */}
            <PropagateLoader color="#0F0F11" cssOverride={override} />
          </div>
        )}
        <Carousel
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable
          draggable
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
              isAddedToCart={product.isAddedToCart}
              isLiked={product.isAddedToCart}
              wasOpened={product.wasOpened}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

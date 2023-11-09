/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import { Product, ProductExtended } from '../../types/product';
import { Photos } from '../Photos/Photos';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import arrow from '../../icons/Chevron (Arrow Right).svg';
import arrowLeft from '../../icons/chevron-left.svg';
import home from '../../icons/Home.svg';
import './sass/PhoneInfo.scss';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { ActionsVariants } from '../ActionsVariants/ActionsVariants';

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState<ProductExtended | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState<Product[]>([]);

  const loadRecommended = async () => {
    const response = await axios.get(
      `https://product-catalog-be-6qo2.onrender.com/products/${phoneId}/recommended/`,
    );

    setRecommended(response.data);
  };

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await axios.get(
          `https://product-catalog-be-6qo2.onrender.com/products/${phoneId}`,
        );

        if (response.data) {
          setPhoneDetails(response.data);
          console.log(response.data);
        } else {
          setPhoneDetails(null);
        }

        setLoading(false);
      } catch (error) {
        console.error('There was a problem fetching phone details:', error);
        setLoading(false);
      }
    };

    fetchPhoneDetails();
    loadRecommended();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!phoneDetails) {
    return <div>Phone not found</div>;
  }

  const responsiveInfo = {
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

  const ButtonGroupInfo = ({
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
      <div className="info-carousel-button-group">
        <button
          className="info-carousel-button-group-left"
          onClick={() => previous()}
          aria-label="button"
          type="button"
        >
          {/* {'<'} */}
        </button>
        <button
          className="info-carousel-button-group-right"
          onClick={() => next()}
          type="button"
        >
          {/* {'>'} */}
        </button>
      </div>
    );
  };

  return (
    <div className="info">
      <section className="info__head">
        <div className="info__head__container">
          <Link to="/home" className="info__head__home">
            <img src={home} alt="home" />
          </Link>
          <img src={arrow} className="info__head__arr" alt="arrow right" />
          <Link to="/phones" className="info_head_phones">
            Phones
          </Link>
          <img src={arrow} className="info__head__arr" alt="arrow right" />
          <p className="info__head__name">{phoneDetails.name}</p>
        </div>
        <Link to="/phones" className="info__head__back">
          <img src={arrowLeft} alt="arrow left" />
          Back
        </Link>
        <h1 className="info__head__title">{phoneDetails.name}</h1>
      </section>
      <div className="info__main">
        <section className="info__main__photos">
          <Photos images={phoneDetails.images} />
        </section>
        <section className="info__main__actions">
          <ActionsVariants
            price_regular={phoneDetails.price_regular}
            price_discount={phoneDetails.price_discount}
            screen={phoneDetails.screen}
            capacity={phoneDetails.capacity}
            color={phoneDetails.color}
            ram={phoneDetails.ram}
            colors_available={phoneDetails.colors_available}
            capacity_available={phoneDetails.capacity_available}
          />
        </section>
        <section className="info__main__tech">
          <TechSpecs
            camera={phoneDetails.camera}
            capacity={phoneDetails.capacity}
            cell={phoneDetails.cell}
            processor={phoneDetails.processor}
            ram={phoneDetails.ram}
            resolution={phoneDetails.resolution}
            screen={phoneDetails.screen}
            zoom={phoneDetails.zoom}
          />
        </section>
        <section className="info__main__about">
          <About description={phoneDetails.description} />
        </section>
        <div className="info__main__recommendedSection">
          <p className="info__slider__title">You may also like</p>
          <div className="info__main__recommendedCards">
            <Carousel
              renderButtonGroupOutside
              customButtonGroup={<ButtonGroupInfo />}
              arrows={false}
              swipeable={false}
              draggable={false}
              responsive={responsiveInfo}
              ssr
              infinite
              autoPlaySpeed={1000}
              keyBoardControl
              transitionDuration={500}
              containerClass="info-carousel-container"
              dotListClass="info-custom-dot-list-style"
              itemClass="info-carousel-item"
            >
              {recommended.map((product) => (
                <div className="info__main__recommendedCard" key={product.name}>

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
                  />
                </div>
              ))}
            </Carousel>
            {/* {recommended
              && recommended.map((product: Product) => (
                <div className="info__main__recommendedCard" key={product.name}>
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
                    isLiked={product.isLiked}
                  />
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailsPage;

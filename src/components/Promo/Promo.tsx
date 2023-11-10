/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import './sass/Promo.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Promo = () => {
  const responsivePromo = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1001 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1000, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 501 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
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
      <div className="promo_carousel-button-group">
        <button
          className="promo_carousel-button-group-left"
          onClick={() => previous()}
          aria-label="button"
          type="button"
        >
          {/* {'<'} */}
        </button>
        <button
          className="promo_carousel-button-group-right"
          onClick={() => next()}
          type="button"
        >
          {/* {'>'} */}
        </button>
      </div>
    );
  };

  return (
    <div className="promo">
      <div className="promo_newModelsSlider">
        <Carousel
          showDots
          renderDotsOutside
          renderButtonGroupOutside
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          swipeable
          draggable
          responsive={responsivePromo}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all 4"
          transitionDuration={500}
          containerClass="promo_carousel-container"
          dotListClass="promo_custom-dot-list-style"
          itemClass="promo_carousel-item"
        >
          <img
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={require('../../img/banner/banner.png')}
            alt="We are trying to get a pic..."
            className="promo_image"
          />
          <img
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={require('../../img/banner/banner-phones.png')}
            alt="We are trying to get a pic..."
            className="promo_image"
          />
          <img
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={require('../../img/banner/banner.png')}
            alt="We are trying to get a pic..."
            className="promo_image-tablets"
          />
        </Carousel>
      </div>
    </div>
  );
};

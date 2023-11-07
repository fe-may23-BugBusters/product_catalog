/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import './sass/Promo.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Promo = () => {
  const responsive = {
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
    next, previous, goToSlide, ...rest
  }: any) => {
    const { carouselState: { currentSlide } } = rest;

    return (
      <div
        className="promo_carousel-button-group"
      >
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

        </Carousel>
      </div>

    </div>
  );
};

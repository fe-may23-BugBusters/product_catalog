/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { Product, ProductExtended } from '../../types/product';
import { Photos } from '../Photos/Photos';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import arrow from '../../icons/Chevron (Arrow Right).svg';
import arrowLeft from '../../icons/chevron-left.svg';
import home from '../../icons/Home.svg';
import './sass/PhoneInfo.scss';
import { PhoneCard } from '../PhoneCard/PhoneCard';

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState<ProductExtended | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState<Product[] >([]);

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
          <Photos images={phoneDetails.images} />
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
          <section className="info__main__about">
            <About description={phoneDetails.description} />
          </section>
          {/* <div className="info__main__recommendedSection">
            <div className="info__main__recommendedCards">
              {recommended && (recommended.map((product: Product) => (
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
                  />
                </div>

              )))}
            </div>
          </div> */}
        </div>
  );
};

export default PhoneDetailsPage;

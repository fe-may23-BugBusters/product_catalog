/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ProductExtended } from '../../types/product';
import { Photos } from '../Photos/Photos';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import arrow from '../../icons/Chevron (Arrow Right).svg';
import arrowLeft from '../../icons/chevron-left.svg';
import home from '../../icons/Home.svg';
import './sass/PhoneInfo.scss';

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState<ProductExtended | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

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
        </div>
  );
};

export default PhoneDetailsPage;

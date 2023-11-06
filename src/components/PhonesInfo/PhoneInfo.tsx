import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { Product } from '../../types/product';
import { About } from '../About/About';
import arrow from '../../icons/Chevron (Arrow Right).svg';
import arrowLeft from '../../icons/chevron-left.svg';
import home from '../../icons/Home.svg';
import './sass/PhoneInfo.scss';

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await axios.get(
          `https://product-catalog-be-6qo2.onrender.com/products/${phoneId}`,
        );

        if (response.data) {
          setPhoneDetails(response.data);
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
    <>
      <div className="info">
        <section className="info__head">
          <div className="info__head__container">
            <Link to="/home" className="info__head__home">
              <img src={home} alt="home" />
            </Link>
            <img src={arrow} className="info__head__arr" alt="arrow right" />
            <Link to="/phones" className="info_head_phones">Phones</Link>
            <img src={arrow} className="info__head__arr" alt="arrow right" />
            <p className="info__head__name">
              {phoneDetails.name}
            </p>
          </div>
          <Link to="/phones" className="info__head__back">
            <img src={arrowLeft} alt="arrow left" />
            Back
          </Link>
          <h1 className="info__head__title">
            {phoneDetails.name}
          </h1>
        </section>
        <div className="info__main">
          <section className="info__main__about">
            <About />
          </section>

        </div>

      </div>

      {/* <div>
        <h1>{phoneDetails.name}</h1>
        <p>
          Category:
          {phoneDetails.category}
        </p>
        <p>
          Phone ID:
          {phoneDetails.phoneid}
        </p>
        <p>
          Item ID:
          {phoneDetails.itemid}
        </p>
        <p>
          Full Price:
          {phoneDetails.fullprice}
        </p>
        <p>
          Price:
          {phoneDetails.price}
        </p>
        <p>
          Screen:
          {phoneDetails.screen}
        </p>
        <p>
          Capacity:
          {phoneDetails.capacity}
        </p>
        <p>
          Color:
          {phoneDetails.color}
        </p>
        <p>
          Ram:
          {phoneDetails.ram}
        </p>
        <p>
          Year:
          {phoneDetails.year}
        </p>
        <img src={phoneDetails.image} alt={phoneDetails.name} />
      </div> */}

    </>
  );
};

export default PhoneDetailsPage;

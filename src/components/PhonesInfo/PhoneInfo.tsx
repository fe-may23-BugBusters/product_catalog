/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ProductExtended } from '../../types/product';
import { Photos } from '../Photos/Photos';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState<ProductExtended | null>(null);
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
    <div>
      <Photos images={phoneDetails.images} />
      <About />
      <TechSpecs />
      <h1>{phoneDetails.name}</h1>
      <p>
        Item ID:
        {phoneDetails.id}
      </p>
      <p>
        Full Price:
        {phoneDetails.price_regular}
      </p>
      <p>
        Price:
        {phoneDetails.price_discount}
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
    </div>
  );
};

export default PhoneDetailsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../services/dataService';
import { Product } from '../../types/product';

const PhoneDetailsPage = () => {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await fetchData({ phoneId });

        if (response.length > 0) {
          setPhoneDetails(response[0]);
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
      <h1>{phoneDetails.name}</h1>
      <p>
        Category:
        {' '}
        {phoneDetails.category}
      </p>
      <p>
        Phone ID:
        {' '}
        {phoneDetails.phoneid}
      </p>
      <p>
        Item ID:
        {' '}
        {phoneDetails.itemid}
      </p>
      <p>
        Full Price:
        {' '}
        {phoneDetails.fullprice}
      </p>
      <p>
        Price:
        {' '}
        {phoneDetails.price}
      </p>
      <p>
        Screen:
        {' '}
        {phoneDetails.screen}
      </p>
      <p>
        Capacity:
        {' '}
        {phoneDetails.capacity}
      </p>
      <p>
        Color:
        {' '}
        {phoneDetails.color}
      </p>
      <p>
        Ram:
        {' '}
        {phoneDetails.ram}
      </p>
      <p>
        Year:
        {' '}
        {phoneDetails.year}
      </p>
      <img src={phoneDetails.image} alt={phoneDetails.name} />

    </div>
  );
};

export default PhoneDetailsPage;

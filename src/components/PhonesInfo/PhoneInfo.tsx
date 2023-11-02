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
    </div>
  );
};

export default PhoneDetailsPage;

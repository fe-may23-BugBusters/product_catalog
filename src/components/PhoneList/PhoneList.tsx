import React from 'react';
import './PhonesList.scss';
import { Product } from '../../types/product';
import { PhoneCard } from '../PhoneCard/PhoneCard';

interface Props {
  phones: Product[];
}

export const PhonesList: React.FC<Props> = ({ phones }) => (
  <div className="phones">
    {phones.map((phone) => {
      return (
        <PhoneCard
          key={phone.id}
          name={phone.name}
          fullprice={phone.fullprice}
          price={phone.price}
          screen={phone.screen}
          capacity={phone.capacity}
          color={phone.color}
          ram={phone.ram}
          year={phone.year}
          image={phone.image}
          product={phone}
        />
      );
    })}
  </div>
);

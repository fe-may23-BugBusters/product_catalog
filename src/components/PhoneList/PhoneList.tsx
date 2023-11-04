import React from 'react';
// import './PhonesList.scss';
import { Product } from '../../types/product';
import { PhoneCard } from '../PhoneCard/PhoneCard';

interface Props {
  phones: Product[];
}

export const PhonesList: React.FC<Props> = ({ phones }) => (
  <div className="phones">
    {/* {phones.map((phone) => {
      return (
        <PhoneCard key={phone.id} phoneid={phone.id} />
      );
    })} */}
  </div>
);

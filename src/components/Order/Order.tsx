/* eslint-disable */

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './sass/Order.scss';

export const Order = () => {
  

  return (
    
    <div className="order">
        <div className="order_number">
            <p>Order number #{`1`}</p>
            <div className="order_number-time">
            <p>14:00 01.01.2023</p>
        </div>
        <div className="order_number-status">
            <p>In progress</p>
        </div>
        </div>
        <div className="order_main">
        <div className="order_list">
            <p>Some products:</p>  
            <ul className="order_list-elements">
                <li className="order_list-element">product 1 with very long name and color&quantity</li>
                <li className="order_list-element">product 1 with very long name and color&quantity</li>
                <li className="order_list-element">product 1 with very long name and color&quantity</li>
                <li className="order_list-element">product 1 with very long name and color&quantity</li>
                <li className="order_list-element">product 1 with very long name and color&quantity</li>
                
            </ul>
        </div>
        <div className="order_data">
            <p>Some order details:</p>  
            <ul className="order_data-elements">
                <li className="order_data-element">address</li>
                <li className="order_data-element">address</li>
                <li className="order_data-element">address</li>
                <li className="order_data-element">address</li>
                <li className="order_data-element">address</li>
            </ul>
        </div>
        </div>
        

    </div>
    
  );
};

/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCheckout = () => {
    // kod obsługujący proces zamówienia
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <button onClick={handleCheckout}>Checkout</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
      >
        <h2>Checkout Success!</h2>
        <p>Your order has been placed successfully.</p>
        <Link to="/phones">Go to Phones Page</Link>
      </Modal>
    </div>
  );
};

export default CheckoutPage;

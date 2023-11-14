/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './sass/Checkout.scss';

const CheckoutPage = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: any) => {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // You can add your custom logic here, such as form validation or sending data via AJAX

    // Close the modal or navigate to another page
    closeModal();
  };

  useEffect(() => setIsModalOpen(true), []);

  return (
    <div className="checkout">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        overlayClassName="checkout__form"
      >
        <div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="close-button"
          >
            X
          </button>
          <form
            id="form"
            className="checkout__form"
            action="submit.php"
            method="POST"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">First Name:</label>
            <input
              className="checkout__form__field"
              type="text"
              id="name"
              name="name"
              required
            />

            <label htmlFor="surname">Last Name:</label>
            <input
              className="checkout__form__field"
              type="text"
              id="surname"
              name="surname"
              required
            />

            <label htmlFor="email">E-mail:</label>
            <input
              className="checkout__form__field"
              type="email"
              id="email"
              name="email"
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              className="checkout__form__field"
              type="tel"
              id="phone"
              name="phone"
              required
            />

            <label htmlFor="address">Address:</label>
            <input
              className="checkout__form__field"
              type="text"
              id="address"
              name="address"
              required
            />
            <div className="checkout__form__checkbox">
              <label htmlFor="agreement">
                Agreement for Site &apos;s Terms:
              </label>
              <input
                className="checkout__form__checkbox__input"
                type="checkbox"
                id="agreement"
                name="agreement"
                required
              />
              <p>
                Please review and agree to our
                {' '}
                <a href="#terms">terms</a>
                {' '}
                before
                submitting.
              </p>

              <button
                className="checkout__form__field checkout__form__field__button"
                type="submit"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;

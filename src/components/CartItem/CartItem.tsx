/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './sass/CartItem.scss';
import { useTContext, TypeContext } from '../../context/Context';
import { Product } from '../../types/product';

type Props = {
  name: string;
  // fullprice: number;
  price: number;
  image: string;
  product: Product;
  quantity: number;
};

export const CartItem: React.FC<Props> = ({
  name,
  // fullprice,
  price,
  image,
  product,
  quantity,
}) => {
  const { cart, setCart } = useTContext() as TypeContext;

  const handleIncrease = () => {
    const updatedCart = cart.map((p) => {
      // dla zadanego id dodajemy quantity + 1
      if (p.id === product.id) {
        return {
          ...p,
          quantity: quantity + 1,
        };
      }
      // dla pozostalych nic sie nie zmieni

      return p;
    });

    // Ustaw zaktualizowany koszyk
    setCart([...updatedCart]);
  };

  const handleDecrease = () => {
    const updatedCart = cart.map((p) => {
      // dla zadanego id q-1
      if (p.id === product.id) {
        return {
          ...p,
          quantity: quantity - 1,
        };
      }
      // dla pozostalych nic sie nie zmieni

      return p;
    });

    // Ustaw zaktualizowany koszyk
    setCart([...updatedCart]);
  };

  const increaseQuantity = () => {
    handleIncrease();
  };

  const removeItemFromCart = () => {
    if (cart.length === 1) {
      setCart([]);
      const cartJSON = JSON.stringify([]);

      localStorage.setItem('cart', cartJSON);
    } else {
      const updatedCart = cart.filter((p) => {
        return p.id !== product.id;
      });

      // Ustaw zaktualizowany kosz
      setCart([...updatedCart]);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      handleDecrease();
    }
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__info">
          <button
            type="button"
            className="cartItem__info__close"
            onClick={removeItemFromCart}
          />
          <img
            src={require(`../../${image}`)}
            alt="iphone"
            className="cartItem__info__img"
          />
          <h2 className="cartItem__info__name">{name}</h2>
        </div>

        <div className="cartItem__calc">
          <button
            type="button"
            onClick={decreaseQuantity}
            className={`cartItem__calc__minus cartItem__calc__quantity ${
              quantity === 1 ? 'inactive' : ''
            }`}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            type="button"
            onClick={increaseQuantity}
            className="cartItem__calc__plus cartItem__calc__quantity"
          >
            +
          </button>
          <p className="cartItem__calc__price">
            {price * quantity}
            $
          </p>
        </div>
      </div>
    </>
  );
};

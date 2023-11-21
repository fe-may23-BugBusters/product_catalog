/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './sass/CartItem.scss';
import axios from 'axios';
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
  const { hasId, setHasId } = useTContext() as TypeContext;

  const handleIncrease = () => {
    const updatedCart = cart.map((p) => {
      // dla zadanego id dodajemy quantity + 1
      if (p.itemid === product.itemid) {
        axios.patch(`https://product-catalog-be-6qo2.onrender.com/products/${product.itemid}/cart/increase/${quantity + 1}`, {}, { withCredentials: true });

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
      if (p.itemid === product.itemid) {
        axios.patch(`https://product-catalog-be-6qo2.onrender.com/products/${product.itemid}/cart/increase/${quantity - 1}`, {}, { withCredentials: true });

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

  const removeItemFromCart = async () => {
    if (cart.length === 1) {
      setCart([]);
      const cartJSON = JSON.stringify([]);

      localStorage.setItem('cart', cartJSON);
    } else {
      const updatedCart = cart.filter((p) => {
        return p.itemid !== product.itemid;
      });

      // Ustaw zaktualizowany kosz
      setCart([...updatedCart]);
    }

    try {
      if (hasId) {
        console.log('hasid');
        console.log('deleting');
        await axios.patch(
          `https://product-catalog-be-6qo2.onrender.com/products/${product.itemid}/cart`,
          {},
          { withCredentials: true },
        );
      } else {
        console.log('new id');
        await axios
          .get('https://product-catalog-be-6qo2.onrender.com/', {
            withCredentials: true,
          })
          .then(async () => {
            setHasId(true);
            console.log('deleting');
            await axios.patch(
              `https://product-catalog-be-6qo2.onrender.com/products/${product.itemid}/cart`,
              {},
              { withCredentials: true },
            );
          });
      }
    } catch (e) {
      console.log(e);
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
          <div className="cartItem__info-wraper">
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
          </div>
          <h2 className="cartItem__info__name">{name}</h2>
        </div>

        <div className="cartItem__calc">
          <div className="cartItem__calc-wraper">
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
          </div>
          <p className="cartItem__calc__price">
            {price * quantity}
            $
          </p>
        </div>
      </div>
    </>
  );
};

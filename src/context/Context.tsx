import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import { Product } from '../types/product';

export interface TypeContext {
  cart: Product[];
  setCart: React.Dispatch<SetStateAction<Product[]>>;
  recommended: Product[];
  setRecommended: React.Dispatch<SetStateAction<Product[]>>;
  loadRecommended: () => Product[];
}

const TContext = createContext<TypeContext | null>(null);

export function useTContext() {
  return useContext(TContext);
}

export function Provider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [recommended, setRecommended] = useState<Product[]>([]);

  const loadRecommended = async (phoneId: string) => {
    const response = await axios.get(
      `https://product-catalog-be-6qo2.onrender.com/products/${phoneId}/recommended/`,
    );

    setRecommended(response.data);
  };

  useEffect(() => {
    const savedCartJSON = localStorage.getItem('cart');

    if (savedCartJSON) {
      const savedCart = JSON.parse(savedCartJSON);

      setCart([...savedCart]);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const cartJSON = JSON.stringify(cart);

      localStorage.setItem('cart', cartJSON);
    }
  }, [cart]);

  const contextValues: TypeContext = {
    cart,
    setCart,
    recommended,
    setRecommended,
    loadRecommended,
  };

  return (
    <TContext.Provider value={contextValues}>{children}</TContext.Provider>
  );
}

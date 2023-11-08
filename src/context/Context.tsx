import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../types/product';

export interface TypeContext {
  cart: Product[];
  setCart: React.Dispatch<SetStateAction<Product[]>>;
  favourites: Product[];
  setFavourites: React.Dispatch<SetStateAction<Product[]>>;
}

const TContext = createContext<TypeContext | null>(null);

export function useTContext() {
  return useContext(TContext);
}

export function Provider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [favourites, setFavourites] = useState<Product[]>([]);

  useEffect(() => {
    const savedFavouritesJSON = localStorage.getItem('favourites');

    if (savedFavouritesJSON) {
      const savedFavourites = JSON.parse(savedFavouritesJSON);

      setFavourites([...savedFavourites]);
    }
  }, []);

  useEffect(() => {
    if (favourites.length > 0) {
      const favouritesJSON = JSON.stringify(favourites);

      localStorage.setItem('favourites', favouritesJSON);
    }
  }, [favourites]);

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
    favourites,
    setFavourites,
  };

  return (
    <TContext.Provider value={contextValues}>{children}</TContext.Provider>
  );
}

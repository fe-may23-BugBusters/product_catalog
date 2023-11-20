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
  opened: Product[];
  setOpened: React.Dispatch<SetStateAction<Product[]>>;
  hasId: boolean;
  setHasId: React.Dispatch<SetStateAction<boolean>>;
}

const TContext = createContext<TypeContext | null>(null);

export function useTContext() {
  return useContext(TContext);
}

export function Provider({ children }: { children: ReactNode }) {
  const [hasId, setHasId] = useState<boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [favourites, setFavourites] = useState<Product[]>([]);
  const [opened, setOpened] = useState<Product[]>([]);

  useEffect(() => {
    const savedOpenedJSON = localStorage.getItem('opened');

    if (savedOpenedJSON) {
      const savedOpened = JSON.parse(savedOpenedJSON);

      setOpened([...savedOpened]);
    }
  }, []);

  useEffect(() => {
    if (opened.length > 0) {
      const openedJSON = JSON.stringify(opened);

      localStorage.setItem('opened', openedJSON);
    }
  }, [opened]);

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
    opened,
    setOpened,
    hasId,
    setHasId,
  };

  return (
    <TContext.Provider value={contextValues}>{children}</TContext.Provider>
  );
}

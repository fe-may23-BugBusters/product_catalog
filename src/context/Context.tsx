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
}

const TContext = createContext<TypeContext | null>(null);

export function useTContext() {
  return useContext(TContext);
}

export function Provider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const contextValues: TypeContext = {
    cart,
    setCart,
  };

  return (
    <TContext.Provider value={contextValues}>{children}</TContext.Provider>
  );
}

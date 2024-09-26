"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";
import { ICartContext, IProduct } from "./contexts.d";

const CartContext = createContext<ICartContext>({ products: [] });

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const addProductHandler = (product: IProduct) => {
    setProducts([...products, product]);
  };

  const removeProductHandler = (id: string) => {
    setProducts((x) => {
      const filteredProducts = x.filter((x) => x.id !== id);

      return filteredProducts;
    });
  };

  const contextvalue = {
    products,
    addToCart: addProductHandler,
    removeFromCart: removeProductHandler,
  };

  return (
    <CartContext.Provider value={contextvalue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";
import { ICartContext, IProduct } from "./contexts.d";
import config from "@/config/config";

const CartContext = createContext<ICartContext>({ products: [] });

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const initialState: IProduct[] =
    typeof window !== "undefined" &&
    localStorage.getItem(config.LOCAL_STORAGE.CART.PRODUCTS)
      ? JSON.parse(
          localStorage.getItem(config.LOCAL_STORAGE.CART.PRODUCTS) ?? "[]"
        )
      : [];

  const [products, setProducts] = useState<IProduct[]>(initialState);

  const addProductHandler = (product: IProduct) => {
    setProducts((x: IProduct[]) => {
      return [...x, product];
    });

    updateLocalStorage();
  };

  const removeProductHandler = (id: string) => {
    setProducts((x) => {
      const filteredProducts = x.filter((x) => x.id !== id);

      return filteredProducts;
    });

    updateLocalStorage();
  };

  const updateLocalStorage = () => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          config.LOCAL_STORAGE.CART.PRODUCTS,
          JSON.stringify(products)
        );
      }
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

"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import { ICartContext, IProduct } from "./contexts.d";
import config from "@/config/config";
import { toast } from "react-toastify";

const CartContext = createContext<ICartContext>({ products: [] });

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const addProductHandler = (product: IProduct) => {
    setProducts((x: IProduct[]) => {
      const updatedProducts = [...x, product];
      updateLocalStorage(updatedProducts);

      return updatedProducts;
    });

    toast.success(`${product.title} has been added to your cart!`);
  };

  const removeProductHandler = (product: IProduct) => {
    setProducts((x) => {
      const filteredProducts = x.filter((x) => x.id !== product.id);
      updateLocalStorage(filteredProducts);

      return filteredProducts;
    });

    toast.warning(`${product.title} has been removed from your cart!`);
  };

  const updateLocalStorage = (products: IProduct[]) => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          config.LOCAL_STORAGE.CART.PRODUCTS,
          JSON.stringify(products)
        );
      }
    });
  };

  const isExistsOnCart = (product: IProduct) => {
    return !!products.find((x) => x.id === product.id);
  };

  const contextvalue = {
    products,
    addToCart: addProductHandler,
    removeFromCart: removeProductHandler,
    isExistsOnCart: isExistsOnCart,
  };

  useEffect(() => {
    const initialState: IProduct[] =
      typeof window !== "undefined" &&
      localStorage.getItem(config.LOCAL_STORAGE.CART.PRODUCTS)
        ? JSON.parse(
            localStorage.getItem(config.LOCAL_STORAGE.CART.PRODUCTS) ?? "[]"
          )
        : [];

    setProducts(initialState);
    setLoading(false);
  }, [setProducts]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <CartContext.Provider value={contextvalue}>
          {children}
        </CartContext.Provider>
      )}
    </>
  );
};

export const useCart = () => useContext(CartContext);

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
import { useAuth } from "./authenticationContext";

const CartContext = createContext<ICartContext>({ products: [] });

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user, isLoggedIn } = useAuth();

  const addProductHandler = (product: IProduct) => {
    if (user?.username == product.owner_name) {
      toast.error(
        `${product.title} can not be added as it's your own product!`
      );

      return;
    }
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

  const mergeProductHandler = (updatedProducts: IProduct[]) => {
    setProducts((existingProducts: IProduct[]) => {
      const mergedProductDictionary: { [x: string]: IProduct } =
        updatedProducts.reduce(
          (prev, current) => Object.assign(prev, { [current.id]: current }),
          {}
        );

      const newProducts = existingProducts.map((x) => {
        return !!mergedProductDictionary[x.id]
          ? mergedProductDictionary[x.id]
          : x;
      });

      return newProducts;
    });
  };

  const clearAllHandler = () => {
    setProducts([]);
    updateLocalStorage([]);
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

  const contextvalue: ICartContext = {
    products,
    addToCart: addProductHandler,
    removeFromCart: removeProductHandler,
    isExistsOnCart: isExistsOnCart,
    mergeUpdatedProducts: mergeProductHandler,
    clearAll: clearAllHandler,
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

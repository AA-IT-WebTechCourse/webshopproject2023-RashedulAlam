import React from "react";
import ProductCard from "./productCard";
import { IProductsProps } from "./product.d";

const products: React.FC<IProductsProps> = ({
  products,
  viewType,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-between">
      {products.map((x, i) => (
        <ProductCard
          key={i}
          viewType={viewType}
          product={x}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default products;

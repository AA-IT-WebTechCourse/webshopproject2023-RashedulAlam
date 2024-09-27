import React from "react";
import ProductCard from "./productCard";
import { IProductsProps } from "./product.d";

const products: React.FC<IProductsProps> = ({
  products,
  viewType,
  addToCart,
  removeFromCart,
  showActionButton,
}) => {
  const productCardProps = {
    viewType: viewType,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    showActionButton: showActionButton,
  };
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-between">
      {products.map((x, i) => (
        <ProductCard key={i} product={x} {...productCardProps} />
      ))}
    </div>
  );
};

export default products;

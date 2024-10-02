import React from "react";
import ProductCard from "./productCard";
import { IProductsProps } from "./product.d";

const Products: React.FC<IProductsProps> = ({
  products,
  viewType,
  addToCart,
  removeFromCart,
  showActionButton,
  isExistsOnCart,
}) => {
  const productCardProps = {
    viewType: viewType,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    showActionButton: showActionButton,
    isExistsOnCart: isExistsOnCart,
  };
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-start">
      {products.map((x, i) => (
        <ProductCard key={i} product={x} {...productCardProps} />
      ))}
    </div>
  );
};

export default Products;

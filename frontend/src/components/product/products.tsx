import React from "react";
import ProductCard from "./productCard";
import { IProductCardProps, ViewType } from "./product.d";


const products: React.FC<IProductsProps> = ({ products, viewType }) => {
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-between">
      {products.map((_i, x) => (
        <ProductCard key={x} viewType={viewType} />
      ))}
    </div>
  );
};

export default products;

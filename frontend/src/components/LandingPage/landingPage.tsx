"use client";
import React, { useEffect, useState } from "react";
import Search from "../search/search";
import ViewToggle from "../product/viewToggle";
import Products from "../product/products";
import { ViewType } from "../product/product.d";
import Pagination from "../pagination/pagination";

const LandingPage = () => {
  const [viewType, setViewType] = useState<ViewType>(ViewType.GRID_VIEW);
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  useEffect(() => {
    console.log(searchText);
    console.log(currentPage);
  }, [searchText, currentPage]);

  const products = Array(10).fill(10);

  return (
    <div className="flex flex-row gap-4 flex-wrap justify-between">
      <Search searchText={searchText} onSearch={setSearchText} />
      <ViewToggle viewType={viewType} setViewType={setViewType} />
      <Products viewType={viewType} products={products} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default LandingPage;

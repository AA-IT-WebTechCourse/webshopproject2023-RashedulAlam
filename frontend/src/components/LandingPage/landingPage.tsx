"use client";
import React, { useEffect, useState } from "react";
import Search from "../search/search";
import ViewToggle from "../product/viewToggle";
import Products from "../product/products";
import {
  IProductsProps,
  IViewToggleProps,
  ViewType,
} from "../product/product.d";
import Pagination from "../pagination/pagination";
import { useCart } from "@/contexts/cartContext";
import { IPaginationProps } from "../pagination/pagination.d";
import { ISearchProps } from "../search/search.d";
import { mockProducts } from "./dummyProducts";
import { useAuth } from "@/contexts/authenticationContext";

const LandingPage = () => {
  const [viewType, setViewType] = useState<ViewType>(ViewType.GRID_VIEW);
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { addToCart, removeFromCart } = useCart();
  const { isLoggedIn } = useAuth();
  const productProps: IProductsProps = {
    products: mockProducts,
    viewType: viewType,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    showActionButton: !!isLoggedIn,
  };
  const paginationProps: IPaginationProps = {
    currentPage: 1,
    totalPages: 1,
    onPageChange: setCurrentPage,
  };

  const searchProps: ISearchProps = {
    onSearch: setSearchText,
    searchText: searchText,
  };

  const viewToggleProps: IViewToggleProps = {
    setViewType: setViewType,
    viewType: viewType,
  };

  useEffect(() => {
    console.log(searchText);
    console.log(currentPage);
  }, [searchText, currentPage]);

  return (
    <div className="flex flex-row gap-4 flex-wrap justify-between">
      <Search {...searchProps} />
      <ViewToggle {...viewToggleProps} />
      <Products {...productProps} />
      <Pagination {...paginationProps} />
    </div>
  );
};

export default LandingPage;

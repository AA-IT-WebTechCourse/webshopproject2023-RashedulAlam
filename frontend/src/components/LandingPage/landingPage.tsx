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
import { useAuth } from "@/contexts/authenticationContext";
import { axiosInstanceWithAuth } from "@/libs/utils/api";
import { IPaginationResponse } from "../inventory/inventory.d";
import config from "@/config/config";
import { IProduct } from "@/contexts/contexts.d";

const LandingPage = () => {
  const [viewType, setViewType] = useState<ViewType>(ViewType.GRID_VIEW);
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { addToCart, removeFromCart, isExistsOnCart } = useCart();
  const { isLoggedIn } = useAuth();
  const productProps: IProductsProps = {
    products: products,
    viewType: viewType,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    showActionButton: !!isLoggedIn,
    isExistsOnCart: isExistsOnCart,
  };
  const paginationProps: IPaginationProps = {
    currentPage: currentPage,
    totalPages: totalPages,
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
    axiosInstanceWithAuth
      .get<IPaginationResponse<IProduct>>(
        config.API_URLS.PRODUCT.PRODUCTS(currentPage, searchText)
      )
      .then(
        ({ data }) => {
          if (data) {
            setProducts(data.results);
            setTotalPages(Math.ceil(data.count / config.PAGINATION.PAGE_SIZE));
          }
        },
        () => {}
      );
  }, [searchText, currentPage]);

  return (
    <div className="flex flex-col gap-4 min-w-full">
      <div className="flex flex-row justify-between w-full items-center">
        <Search {...searchProps} />
        <ViewToggle {...viewToggleProps} />
      </div>
      <Products {...productProps} />
      <Pagination {...paginationProps} />
    </div>
  );
};

export default LandingPage;

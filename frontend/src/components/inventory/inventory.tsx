"use client";
import React, { useEffect, useState } from "react";
import withAuth from "../HOC/withAuth";
import InventoryCard from "./inventoryCard";
import Pagination from "../pagination/pagination";
import { ETabNames, IInventoryProps, IPaginationResponse } from "./inventory.d";
import { useRouter } from "next/navigation";
import { IProduct } from "@/contexts/contexts.d";
import { axiosInstanceWithAuth } from "@/libs/utils/api";
import config from "@/config/config";
import { IPaginationProps } from "../pagination/pagination.d";

const Inventory: React.FC<IInventoryProps> = () => {
  const [activeTab, setActiveTab] = useState<ETabNames>(ETabNames.SALE);
  const [products, setProducts] = useState<IProduct[]>([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const tabClass = {
    active: " bg-gray-200 hover:bg-gray-200",
    inactive: " hover:bg-gray-200 ",
  };

  const navigateToNewProduct = () => {
    router.push("/myitems/add-product");
  };

  const getTabClass = (tabName: string) => {
    return activeTab == tabName ? tabClass.active : tabClass.inactive;
  };

  useEffect(() => {
    axiosInstanceWithAuth
      .get<IPaginationResponse<IProduct>>(
        config.API_URLS.INVENTORY.SALE(currentPage)
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
  }, [currentPage]);

  const onPageChangeHandler = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  const paginationProps: IPaginationProps = {
    currentPage: currentPage,
    totalPages: totalPages,
    onPageChange: onPageChangeHandler,
  };

  return (
    <div className="flex flex-col gap-6 min-h-[75vh] w-full">
      <ul className="flex flex-wrap border-b border-gray-200 ">
        <li className="mr-2">
          <button
            className={`capitalize inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${getTabClass(
              ETabNames.SALE
            )}`}
            onClick={() => setActiveTab(ETabNames.SALE)}
          >
            {ETabNames.SALE}
          </button>
        </li>
        <li className="mr-2">
          <button
            className={`capitalize inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${getTabClass(
              ETabNames.SOLD
            )}`}
            onClick={() => setActiveTab(ETabNames.SOLD)}
          >
            {ETabNames.SOLD}
          </button>
        </li>
        <li className="mr-2">
          <button
            className={`capitalize inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${getTabClass(
              ETabNames.PURCHASED
            )}`}
            onClick={() => setActiveTab(ETabNames.PURCHASED)}
          >
            {ETabNames.PURCHASED}
          </button>
        </li>
      </ul>
      <div className="px-1 py-2 flex flex-col gap-4">
        {activeTab == ETabNames.SALE && (
          <div className="flex flex-row items-center gap-2">
            <button
              aria-label="add product"
              className="rounded-full w-10 h-10 bg-blue-600 flex flex-row text-white"
              onClick={() => navigateToNewProduct()}
            >
              <svg
                width="32"
                height="32"
                stroke="white"
                strokeWidth="3"
                className="m-2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <p className="text-blue-500 font-semibold text-sm">Add Product</p>
          </div>
        )}
        <div className="flex flex-col gap-4">
          {products.map((x, i) => (
            <InventoryCard key={i} viewType={activeTab} product={x} />
          ))}
        </div>
        <div>
          <Pagination {...paginationProps} />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Inventory);

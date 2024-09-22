"use client";
import React, { useState } from "react";
import withAuth from "../HOC/withAuth";
import InventoryCard from "./inventoryCard";
import Pagination from "../pagination/pagination";
import { ETabNames } from "./inventory.d";

interface IInventoryProps {}

const Inventory: React.FC<IInventoryProps> = () => {
  const [activeTab, setActiveTab] = useState<string>(ETabNames.SALE);
  const products = Array(10).fill(10);

  const tabClass = {
    active: " bg-gray-200 hover:bg-gray-200",
    inactive: " hover:bg-gray-200 ",
  };

  const getTabClass = (tabName: string) => {
    return activeTab == tabName ? tabClass.active : tabClass.inactive;
  };

  return (
    <div className="flex flex-col gap-6 min-h-[75vh] w-full">
      <ul className="flex flex-wrap border-b border-gray-200 ">
        <li className="mr-2">
          <button
            className={`inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${getTabClass(
              ETabNames.SALE
            )}`}
            onClick={() => setActiveTab(ETabNames.SALE)}
          >
            Sale
          </button>
        </li>
        <li className="mr-2">
          <button
            className={`inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${getTabClass(
              ETabNames.SOLD
            )}`}
            onClick={() => setActiveTab(ETabNames.SOLD)}
          >
            Sold
          </button>
        </li>
        <li className="mr-2">
          <button
            className={`inline-block text-blue-600 hover:text-blue-700 rounded-t-lg py-4 px-4 text-sm font-medium text-center ${getTabClass(
              ETabNames.PURCHASED
            )}`}
            onClick={() => setActiveTab(ETabNames.PURCHASED)}
          >
            Purchased
          </button>
        </li>
      </ul>
      <div className="px-1 py-2 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {products.map((x, i) => (
            <InventoryCard key={i} viewType={activeTab} />
          ))}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Inventory);

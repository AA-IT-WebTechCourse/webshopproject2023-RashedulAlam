"use client";
import React, { useState } from "react";
import withAuth from "../HOC/withAuth";

interface IInventoryProps {}

enum ETabNames {
  SALE = "sale",
  SOLD = "sold",
  PURCHASED = "purchased",
}

const Inventory: React.FC<IInventoryProps> = () => {
  const [activeTab, setActiveTab] = useState<string>(ETabNames.SALE);

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
      <div className="hidden px-1 py-2" data-tabs-target="panel">
        <h3 className="text-lg font-semibold">Profile</h3>
      </div>
      <div className="hidden px-1 py-2" data-tabs-target="panel">
        <h3 className="text-lg font-semibold">Dashboard</h3>
      </div>
      <div className="hidden px-1 py-2" data-tabs-target="panel">
        <h3 className="text-lg font-semibold">Settings</h3>
      </div>
    </div>
  );
};

export default withAuth(Inventory);

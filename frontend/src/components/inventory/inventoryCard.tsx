"use client";
import React from "react";
import { ETabNames } from "./inventory.d";
import { useRouter } from "next/navigation";

interface IInventoryCardProps {
  title: string;
  description: string;
  price: number;
  created_by: string;
  purchased_by?: string;
  purchased_at?: string;
  created_at: string;
  viewType: ETabNames;
  id: string;
}

const InventoryCard: React.FC<IInventoryCardProps> = ({ viewType }) => {
  const router = useRouter();

  const navigationHandler = (id: string) => {
    router.push(`/myitems/${id}`);
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between">
      <div className="flex">
        <div className="px-4 py-3 w-fit flex flex-col justify-start gap-1">
          <div className="flex flex-row gap-2">
            <p className="text-white text-xs w-fit p-1 rounded-md bg-green-500">
              Published Date: 2012-12-12 10 am
            </p>

            {viewType == ETabNames.SOLD && (
              <>
                <p className="text-white text-xs p-1 rounded-md bg-gray-500">
                  Purchased by: ralam
                </p>

                <p className="text-white text-xs w-fit p-1 rounded-md bg-blue-500">
                  Purchased Date: 2012-12-12 10 am
                </p>
              </>
            )}

            {viewType == ETabNames.PURCHASED && (
              <>
                <p className="text-white text-xs p-1 rounded-md bg-gray-500">
                  Purchased from: ralam
                </p>

                <p className="text-white text-xs p-1 rounded-md bg-blue-500">
                  Purchased Date: 2012-12-12 10 am
                </p>
              </>
            )}
          </div>
          <p className="text-lg font-bold text-blue-800 truncate block capitalize">
            Product Title
          </p>
          <div className="flex items-center mt-10">
            <p className="text-lg font-semibold text-blue-400 cursor-auto">
              $149
            </p>
            {viewType == ETabNames.SALE && (
              <button
                className="ml-auto"
                aria-label="add to cart"
                type="button"
                onClick={() => navigationHandler("1")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex max-w-96 px-4 py-3">
        <div className="text-gray-400 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;

"use client";
import React from "react";
import { ETabNames, IInventoryCardProps } from "./inventory.d";
import { useRouter } from "next/navigation";
import { formateDate } from "@/libs/utils/date";

const InventoryCard: React.FC<IInventoryCardProps> = ({
  viewType,
  product,
}) => {
  const router = useRouter();

  const navigationHandler = (id: string) => {
    router.push(`/myitems/${id}`);
  };

  const {
    created_at,
    description,
    id,
    owner_name,
    price,
    title,
    purchased_at,
    purchaser_name,
  } = product;

  return (
    <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between">
      <div className="flex">
        <div className="px-4 py-3 w-fit flex flex-col justify-start gap-1">
          <div className="flex flex-row gap-2">
            <p className="text-white text-xs w-fit p-1 rounded-md bg-green-500">
              Published Date: {formateDate(created_at)}
            </p>

            {viewType == ETabNames.SOLD && (
              <>
                <p className="text-white text-xs p-1 rounded-md bg-gray-500">
                  Purchased by: {purchaser_name}
                </p>

                <p className="text-white text-xs w-fit p-1 rounded-md bg-blue-500">
                  Purchased Date: {purchased_at && formateDate(purchased_at)}
                </p>
              </>
            )}

            {viewType == ETabNames.PURCHASED && (
              <>
                <p className="text-white text-xs p-1 rounded-md bg-gray-500">
                  Purchased from: {owner_name}
                </p>

                <p className="text-white text-xs p-1 rounded-md bg-blue-500">
                  Purchased Date: {purchased_at && formateDate(purchased_at)}
                </p>
              </>
            )}
          </div>
          <p className="text-lg font-bold text-blue-800 truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center mt-10">
            <p className="text-lg font-semibold text-blue-400 cursor-auto">
              ${price}
            </p>
            {viewType == ETabNames.SALE && (
              <button
                className="ml-auto"
                aria-label="add to cart"
                type="button"
                onClick={() => navigationHandler(id)}
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
        <div className="text-gray-400 text-xs">{description}</div>
      </div>
    </div>
  );
};

export default InventoryCard;

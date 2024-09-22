import React from "react";
import { IProductCardProps, ViewType } from "./product.d";

const ProductCard = ({
  description,
  price,
  title,
  created_at,
  viewType = ViewType.LIST_VIEW,
}: IProductCardProps) => {
  return (
    <>
      {viewType === ViewType.GRID_VIEW && (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <div className="px-4 py-3 w-72">
            <p className="text-white text-xs w-fit p-1 rounded-md bg-yellow-500">
              Seller: ralam
            </p>
            <p className="text-lg font-bold text-blue-600 truncate block capitalize">
              Product Title
            </p>
            <div className="text-gray-400 text-xs py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <p className="text-white text-xs w-fit p-1 rounded-md bg-green-500">
              Published: 2012-12-12 10 am
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-blue-400 cursor-auto my-3">
                $149
              </p>
              <button
                className="ml-auto"
                aria-label="add to cart"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="fill-black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {viewType === ViewType.LIST_VIEW && (
        <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between">
          <div className="flex">
            <div className="px-4 py-3 w-fit flex flex-col justify-start gap-1">
              <p className="text-white text-xs w-fit p-1 rounded-md bg-yellow-500">
                Seller: ralam
              </p>
              <p className="text-lg font-bold text-blue-800 truncate block capitalize">
                Product Title
              </p>
              <div className="flex flex-row gap-2">
                <p className="text-white text-xs w-fit p-1 rounded-md bg-green-500">
                  Published Date: 2012-12-12 10 am
                </p>
              </div>
              <div className="flex items-center mt-10">
                <p className="text-lg font-semibold text-blue-400 cursor-auto">
                  $149
                </p>
                <button
                  className="ml-auto"
                  aria-label="add to cart"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="fill-black"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex max-w-96 px-4 py-3">
            <div className="text-gray-400 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;

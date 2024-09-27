import React, { useState } from "react";
import { IProductCardProps, ViewType } from "./product.d";
import { IProduct } from "@/contexts/contexts.d";

const ProductCard = ({
  product,
  viewType = ViewType.LIST_VIEW,
  addToCart,
  removeFromCart,
  showActionButton,
}: IProductCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const addToCartHandler = (product: IProduct) => {
    setLoading(true);
    addToCart && addToCart(product);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const { created_at, description, id, owner, price, title } = product;

  return (
    <>
      {viewType === ViewType.GRID_VIEW && (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <div className="px-4 py-3 w-72">
            <p className="text-white text-xs w-fit p-1 rounded-md bg-yellow-500">
              Seller: {owner}
            </p>
            <p className="text-lg font-bold text-blue-600 truncate block capitalize">
              {title}
            </p>
            <div className="text-gray-400 text-xs py-2">{description}</div>
            <p className="text-white text-xs w-fit p-1 rounded-md bg-green-500">
              Published: {created_at}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-blue-400 cursor-auto my-3">
                ${price.toFixed(2)}
              </p>
              {showActionButton && (
                <button
                  className="ml-auto relative"
                  aria-label="add to cart"
                  onClick={() => addToCartHandler(product)}
                  disabled={loading}
                  type="button"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-8 w-8 text-white absolute z-10 -top-1.5 -left-1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="gray"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
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
              )}
            </div>
          </div>
        </div>
      )}
      {viewType === ViewType.LIST_VIEW && (
        <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between">
          <div className="flex">
            <div className="px-4 py-3 w-fit flex flex-col justify-start gap-1">
              <p className="text-white text-xs w-fit p-1 rounded-md bg-yellow-500">
                Seller: {owner}
              </p>
              <p className="text-lg font-bold text-blue-800 truncate block capitalize">
                {title}
              </p>
              <div className="flex flex-row gap-2">
                <p className="text-white text-xs w-fit p-1 rounded-md bg-green-500">
                  Published Date: {created_at}
                </p>
              </div>
              <div className="flex items-center mt-10">
                <p className="text-lg font-semibold text-blue-400 cursor-auto">
                  ${price.toFixed(2)}
                </p>
                {showActionButton && (
                  <button
                    className="ml-auto relative"
                    aria-label="add to cart"
                    type="button"
                    onClick={() => addToCartHandler(product)}
                  >
                    {loading && (
                      <svg
                        className="animate-spin h-8 w-8 text-white absolute z-10 -top-1.5 -left-1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="gray"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
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
                )}
              </div>
            </div>
          </div>
          <div className="flex max-w-96 px-4 py-3">
            <div className="text-gray-400 text-xs">{description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;

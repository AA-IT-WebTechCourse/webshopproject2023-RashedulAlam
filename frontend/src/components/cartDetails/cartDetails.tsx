"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CartDetails = () => {
  const router = useRouter();
  const products = [
    {
      name: "Iphone1",
      Price: 100.0,
    },
    {
      name: "Iphone1",
      Price: 100.0,
    },
    {
      name: "Iphone1",
      Price: 100.01,
    },
  ];
  return (
    <div className="flex flex-row w-full text-gray-950 gap-6 ">
      <div className="flex flex-col gap-10 justify-center border-gray-600 border-1 w-full">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-xl text-gray-600 font-bold">3 Items</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between mb-2">
            <div className="text-sm font-bold text-blue-600">Product Name</div>
            <div className="text-sm font-bold text-blue-600">Product Price</div>
          </div>
          {products.map((x, i) => (
            <div className="flex flex-row justify-between" key={i}>
              <div className="text-sm font-semibold flex flex-col gap-1">
                {x.name}
                <button className="text-xs font-semibold text-red-600">
                  Remove
                </button>
              </div>
              <div className="text-sm font-semibold ">{x.Price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex">
            <button className="text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center"
            onClick={() => router.push('/')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="19 12 5 12"></polyline>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Continue Shopping
            </button>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex">
              <h2 className="font-bold text-lg text-blue-700  ">
                Total Cost: 200.00 Euro
              </h2>
            </div>
            <div className="flex">
              <button className="bg-blue-400 p-3 rounded-md text-white hover:bg-blue-900">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

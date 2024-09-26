"use client";
import { useCart } from "@/contexts/cartContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CartDetails = () => {
  const router = useRouter();
  const { products, removeFromCart } = useCart();
  const [loading, setLoading] = useState<boolean>(false);
  const continueShippingHanlder = () => {
    router.push("/");
  };

  const totalPrice = products.reduce(
    (current, prev) => current + prev.price,
    0
  );

  const paymentHandler = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="flex flex-row w-full text-gray-950 gap-6 ">
      <div className="flex flex-col gap-10 justify-center border-gray-600 border-1 w-full">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-xl text-gray-600 font-bold">
            {products.length} Items
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between mb-2">
            <div className="text-sm font-bold text-blue-600">Title</div>
            <div className="text-sm font-bold text-blue-600">Price</div>
          </div>
          {products.map((x, i) => (
            <div className="flex flex-row justify-between" key={i}>
              <div className="text-sm font-semibold flex flex-col gap-1">
                {x.title}
                <button
                  className="text-xs font-semibold text-red-600"
                  onClick={() => removeFromCart && removeFromCart(x.id)}
                >
                  Remove
                </button>
              </div>
              <div className="text-sm font-semibold ">{x.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="flex">
            <button
              className="text-xs font-semibold text-blue-600 gap-2 flex flex-row items-center"
              onClick={() => continueShippingHanlder()}
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
                Total Cost: {totalPrice.toFixed(2)} Euro
              </h2>
            </div>
            <div className="flex">
              <button
                className="bg-blue-400 p-3 rounded-md text-white hover:bg-blue-900 relative"
                disabled={!products.length || loading}
                onClick={paymentHandler}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white absolute z-10 left-[45%]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="black"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
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

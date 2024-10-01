import React from "react";
import { ICartInfoProps } from "./navbar.d";

const cartInfo: React.FC<ICartInfoProps> = ({ count, onIconClick }) => {
  return (
    <div className="flex flex-row">
      <button aria-label="shopping cart" className="relative flex flex-row p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-blue-600"
          onClick={() => onIconClick()}
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .61h9.72a1 1 0 0 0 1-.76l3.38-9.49H5.52"></path>
        </svg>
        <span
          className={`text-white font-semibold text-xs absolute right-0 top-0  h-4 w-4 bg-blue-500 rounded-full ${
            count > 0 ? "animate-bounce" : ""
          }`}
        >
          {count}
        </span>
      </button>
    </div>
  );
};

export default cartInfo;

import React from "react";
import { ISearchProps } from "./search.d";

const Search: React.FC<ISearchProps> = ({ searchText, onSearch }) => {
  return (
    <div className="flex relative h-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-gray-400 absolute left-2 top-3"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input
        id="product-search"
        type="text"
        className="placeholder shadow appearance-none border rounded w-full py-3 px-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="search products"
        defaultValue={searchText}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;

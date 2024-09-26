"use client";
import React, { useState } from "react";

const PopulateDb = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const onClickHandler = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessage("Database have been re-populated");
    }, 5000);
  };

  const label = `Automatically populate the DB with 6 users, of which 3 users (i.e.
        sellers) own 10 items each. Before each re-population, the DB wii be
        emptied.`;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-red-400 text-sm font-semibold">{label}</p>
      <button
        className="bg-blue-600 w-fit h-fit p-3 rounded flex gap-2 justify-between items-center relative"
        disabled={loading}
        onClick={() => onClickHandler()}
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
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        Polulate Database
      </button>
      {message && (
        <div className="flex flex-row justify-around w-full items-center">
          <p className="text-blue-400 text-sm font-semibold">{message}</p>
          <button aria-label="clear message" onClick={() => setMessage("")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-red-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PopulateDb;

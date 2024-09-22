import React from "react";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (nextPage: number) => void;
}

const pagination: React.FC<IPaginationProps> = ({
  currentPage = 1,
  totalPages = 0,
  onPageChange,
}) => {
  return (
    <div className="flex flex-row p-1 gap-2 items-center justify-center w-full">
      <button
        aria-label="previous page"
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        disabled={currentPage == 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <span className="text-blue-500">
        {currentPage} of {totalPages}
      </span>
      <button
        aria-label="next page"
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        disabled={currentPage == totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default pagination;

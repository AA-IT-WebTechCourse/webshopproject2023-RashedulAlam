import React from "react";
import { ViewType } from "./product.d";


const viewToggle: React.FC<IViewToggleProps> = ({ viewType, setViewType }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button aria-label="list view" className="w-fit h-fit p-1" onClick={() => setViewType(ViewType.LIST_VIEW)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={ viewType === ViewType.LIST_VIEW ? 'stroke-blue-400' :"stroke-gray-400"}
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </button>
      <button aria-label="grid view" className="w-fit h-fit p-1" onClick={() => setViewType(ViewType.GRID_VIEW)}>
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
          className={ viewType === ViewType.GRID_VIEW ? 'stroke-blue-400' :"stroke-gray-400"}
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
    </div>
  );
};

export default viewToggle;

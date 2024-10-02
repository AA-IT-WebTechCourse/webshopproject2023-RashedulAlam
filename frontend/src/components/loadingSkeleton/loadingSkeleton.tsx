import React from "react";
import Skeleton from "react-loading-skeleton";
import { ViewType } from "../product/product.d";

interface ILoadingSkeletonProps {
  viewType: ViewType;
}

const GridViewLoadingSkeleton: React.FC<{}> = () => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="px-4 py-3 w-72">
        <p className="text-white text-xs w-20 p-1 rounded-md">
          <Skeleton />
        </p>
        <p className="text-lg font-bold text-blue-600 truncate block capitalize">
          <Skeleton />
        </p>
        <div className="text-gray-400 text-xs py-2">
          <Skeleton className="h-40" />
        </div>
        <p className="text-white text-xs w-20 p-1 rounded-md">
          <Skeleton />
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-blue-400 cursor-auto my-3 w-20">
            <Skeleton />
          </p>
        </div>
      </div>
    </div>
  );
};

const ListViewLoadingSkeleton: React.FC<{}> = () => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-[1.02] hover:shadow-xl flex flex-row justify-between">
      <div className="flex">
        <div className="px-4 py-3 w-fit flex flex-col justify-start gap-1">
          <p className="text-white text-xs w-20 rounded-md">
            <Skeleton />
          </p>
          <p className="text-lg font-bold text-blue-800 truncate block capitalize w-40">
            <Skeleton />
          </p>
          <div className="flex flex-row gap-2">
            <p className="text-white text-xs w-20 h-8 rounded-md ">
              <Skeleton />
            </p>
          </div>
          <div className="flex items-center mt-10">
            <p className="text-lg font-semibold text-blue-400 cursor-auto w-20">
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-80 px-4 py-3">
        <div className="text-gray-400 text-xs w-full">
          <Skeleton className="w-80 h-40" />
        </div>
      </div>
    </div>
  );
};

const LoadingSkeleton: React.FC<ILoadingSkeletonProps> = ({ viewType }) => {
  const products = Array(8).fill(1);
  
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-start">
      {products.map((_, i) =>
        viewType == ViewType.GRID_VIEW ? (
          <GridViewLoadingSkeleton key={i} />
        ) : (
          <ListViewLoadingSkeleton key={i} />
        )
      )}
    </div>
  );
};

export default LoadingSkeleton;

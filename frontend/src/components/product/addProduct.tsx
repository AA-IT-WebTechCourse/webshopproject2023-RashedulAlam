"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type TCreateProduct = {
  title: string;
  price: number;
  description: string;
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateProduct>();

  const onSubmit: SubmitHandler<TCreateProduct> = (data) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-[87vh] min-w-full ">
      <div className="px-4 pt-6 pb-8 mb-4 w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-left text-blue-600">
          <span className=" bg-clip-text">Add Product to Inventory</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <div>
              <input
                id="title"
                {...register("title", { required: true })}
                type="text"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title"
              />
            </div>
            {errors.title?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Title is required
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <div>
              <input
                id="price"
                type="number"
                {...register("price", {
                  required: true,
                  min: { value: 0.0001, message: "Minimum value is 1" },
                })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price"
              />
            </div>
            {errors.price?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Price is required
              </p>
            )}

            {errors.price?.type === "min" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Minimum Price is 1
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <div>
              <textarea
                id="description"
                {...register("description")}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter short description"
              />
            </div>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800  text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-fit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

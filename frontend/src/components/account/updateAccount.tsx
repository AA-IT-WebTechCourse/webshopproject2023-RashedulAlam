"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TUpdateUserAccount } from "./account.d";

const UpdateAccount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUpdateUserAccount>();

  const onSubmit: SubmitHandler<TUpdateUserAccount> = (data) => {
    console.log(errors);
    console.log(data);
  };

  const [currentInfo] = useState({
    username: "ralam",
    email: "ralam@gmail.com",
  });

  return (
    <div className="flex justify-center items-center w-full">
      <div className="px-4 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center ">
          <span className="text-blue-500 bg-clip-text">Account Setting</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <div>
              <input
                defaultValue={currentInfo.username}
                id="username"
                type="text"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter username"
                disabled
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <div>
              <input
                defaultValue={currentInfo.email}
                id="email"
                type="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                disabled
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
              />
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Password is required
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="new_password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              New Password
            </label>
            <div>
              <input
                id="new_password"
                type="password"
                {...register("newPassword", { required: true })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
              />
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                New Password is required
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <div>
              <input
                id="confirm_password"
                type="password"
                {...register("newConfirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("newPassword") || "Passwords do not match",
                })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm password"
              />
            </div>
            {errors.newConfirmPassword?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                New Confirm Password is required
              </p>
            )}
            {errors.newConfirmPassword?.message && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                New Passwords do not match
              </p>
            )}
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccount;

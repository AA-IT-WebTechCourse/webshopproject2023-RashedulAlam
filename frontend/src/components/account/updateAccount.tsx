"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICurrentUserDetails, TUpdateUserAccount } from "./account.d";
import { axiosInstanceWithAuth } from "@/libs/utils/api";
import config from "@/config/config";
import { HttpStatusCode } from "axios";
import { toast } from "react-toastify";
import withAuth from "../HOC/withAuth";

const UpdateAccountBase = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<TUpdateUserAccount>();

  const onSubmit: SubmitHandler<TUpdateUserAccount> = (data) => {
    const request = {
      old_password: data.password,
      new_password: data.newPassword,
    };

    axiosInstanceWithAuth
      .post<TUpdateUserAccount>(
        config.API_URLS.USER_MANAGEMENT.UPDATE_USER_PASSWORD,
        request
      )
      .then(
        () => {
          toast.success("Password successfully updated !");
          reset();
        },
        (error) => {
          if (error?.response?.status == HttpStatusCode.BadRequest) {
            if (error.response?.data?.old_password) {
              setError("root.serverError", {
                type: "400",
                message: error.response?.data?.old_password[0],
              });
            }
          }

          toast.error("Password could not be updated !");
        }
      );
  };

  const [user, setUser] = useState<ICurrentUserDetails | undefined>();

  useEffect(() => {
    axiosInstanceWithAuth
      .get<ICurrentUserDetails>(config.API_URLS.USER_MANAGEMENT.CURRENT_USER)
      .then(
        (response) => {
          if (response.status == HttpStatusCode.Ok) {
            setUser(response.data);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="px-4 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center ">
          <span className="text-blue-500 bg-clip-text">Account Setting</span>
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
          noValidate
        >
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <div>
              <input
                defaultValue={user?.username || ""}
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
                defaultValue={user?.email || ""}
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
          {errors?.root?.serverError && (
            <div className="flex">
              <p role="alert" className="text-red-600 font-semibold mt-2">
                {errors?.root?.serverError?.message}
              </p>
            </div>
          )}
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


const UpdateAccount = withAuth(UpdateAccountBase);

export default UpdateAccount;

"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegisterUser } from "./account.d";
import instance from "@/libs/utils/api";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import config from "@/config/config";
import withoutAuth from "../HOC/withoutAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<TRegisterUser>();

  const router = useRouter();

  const onSubmit: SubmitHandler<TRegisterUser> = (data: TRegisterUser) => {
    instance
      .post<TRegisterUser, AxiosResponse<TRegisterUser>>(
        config.API_URLS.AUTH.REGISTER,
        data
      )
      .then(
        (response) => {
          if (response.status == 201) {
            router.push("/login");
          }
        },
        (error) => {
          if (error?.response?.data) {
            const errorData = error.response.data;

            Object.keys(errorData).forEach((currentValue: any) => {
              setError(currentValue, {
                type: "required",
                message: errorData[currentValue][0],
              });
            });
          } else {
            setError("root.serverError", {
              type: "400",
              message: '"Invalid user registration"',
            });
          }
        }
      );
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="px-4 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center ">
          <span className="text-blue-500 bg-clip-text">Register</span>
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
                id="username"
                type="text"
                {...register("username", { required: true })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter username"
              />
            </div>
            {errors.username?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Username is required
              </p>
            )}
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
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter email"
              />
            </div>
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Email is required
              </p>
            )}
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
              htmlFor="confirm_password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <div>
              <input
                id="confirm_password"
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm password"
              />
            </div>
            {errors.confirmPassword?.type === "required" && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Confirm Password is required
              </p>
            )}
            {errors.confirmPassword?.message && (
              <p role="alert" className="text-red-600 font-semibold mt-2">
                Passwords do not match
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?
          <Link
            href="/login"
            className="text-blue-500 hover:underline ml-2 font-semibold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default withoutAuth(Register);

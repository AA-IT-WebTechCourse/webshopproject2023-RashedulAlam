"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "@/contexts/authenticationContext";
import { useRouter } from "next/navigation";
import { ILoginResponse, TLogin } from "./account.d";
import instance from "@/libs/utils/api";
import { AxiosResponse } from "axios";
import config from "@/config/config";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLogin>();

  const { setUserLoggedIn } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<TLogin> = (data: TLogin) => {
    instance
      .post<TLogin, AxiosResponse<ILoginResponse>>(
        config.API_URLS.AUTH.LOGIN,
        data
      )
      .then(
        (response) => {
          if (response.status == 200) {
            setUserLoggedIn &&
              setUserLoggedIn({
                username: data.username,
                token: response.data.access,
              });
            router.push("/");
          }
        },
        (error) => {
          let message = "Invalid login attempt";
          if (error?.response?.data?.detail) {
            message = error?.response?.data?.detail;
          }
          setError("root.serverError", {
            type: "400",
            message: message,
          });
        }
      );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="text-blue-500 bg-clip-text">Log In</span>
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

          {errors?.root?.serverError && (
            <div className="flex">
              <p role="alert" className="text-red-600 font-semibold mt-2">
                {errors?.root?.serverError?.message}
              </p>
            </div>
          )}

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?
          <Link
            href="/signup"
            className="text-blue-500 hover:underline ml-2 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

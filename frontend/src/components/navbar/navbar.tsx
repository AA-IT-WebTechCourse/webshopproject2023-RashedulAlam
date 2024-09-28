"use client";
import { useAuth } from "@/contexts/authenticationContext";
import Link from "next/link";
import React from "react";
import UserMenu from "./userMenu";
import CartInfo from "./cartInfo";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/cartContext";
import { IUserMenuProps } from "./navbar.d";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { isLoggedIn, user, logoutUser } = useAuth();
  const router = useRouter();
  const { products } = useCart();

  const nagivateToCartDetails = () => {
    router.push("/cart");
  };

  const cartInfoProps = {
    count: products.length,
    onIconClick: nagivateToCartDetails,
  };

  const additionalMenus = [
    {
      name: "Database Population",
      url: "/db-population",
    },
    ...(isLoggedIn
      ? [
          {
            name: "Inventory",
            url: "/myitems",
          },
        ]
      : []),
    {
      name: "Docs",
      openNewTab: true,
      url: "https://github.com/AA-IT-WebTechCourse/webshopproject2023-RashedulAlam",
    },
  ];

  const accountSettingHandler = () => {
    router.push("/account");
  };

  const logoutHandler = () => {
    logoutUser && logoutUser();
  };

  const userMenuProps: IUserMenuProps = {
    user: user,
    logoutHandler: logoutHandler,
    accountSettingHandler: accountSettingHandler,
  };

  return (
    <>
      <div className="relative bg-white mb-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Webshop</span>
                <span className="text-3xl text-blue-700 font-semibold drop-shadow-lg">
                  WebShop
                </span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {additionalMenus.map((x, i) => {
                return (
                  <Link
                    key={i}
                    href={x.url}
                    target={x.openNewTab ? "_blank" : "_self"}
                    className="text-base font-bold text-blue-500 hover:text-blue-800"
                  >
                    {x.name}
                  </Link>
                );
              })}
            </nav>

            {!isLoggedIn && (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link
                  href="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </div>
            )}
            {isLoggedIn && (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-4">
                <CartInfo {...cartInfoProps} />
                <UserMenu {...userMenuProps} />
              </div>
            )}
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="sr-only">Webshop</span>
                  <span className="text-3xl text-blue-700 font-semibold drop-shadow-lg">
                    WebShop
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {additionalMenus.map((x, i) => {
                  return (
                    <Link
                      key={i}
                      href={x.url}
                      target={x.openNewTab ? "_blank" : "_self"}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {x.name}
                    </Link>
                  );
                })}
              </div>
              <div>
                <Link
                  href="/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <Link
                    href="/login"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

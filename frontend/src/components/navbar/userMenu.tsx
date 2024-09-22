import { useAuth } from "@/contexts/authenticationContext";
import { useRouter } from "next/navigation";
import React from "react";

const UserMenu = () => {
  const { setUser } = useAuth();
  const router = useRouter();

  const navigationHandler = (url?: string, isLogOutMenu?: boolean) => {
    if (isLogOutMenu) {
      return;
    } else {
      url && router.push(url);
    }
  };

  const userMenus = [
    {
      name: "Settings",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-.99 1.51V21a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2v-.2a1.65 1.65 0 0 0-.99-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-.99H3a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2h.2a1.65 1.65 0 0 0 1.51-.99 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.28a1.65 1.65 0 0 0 .99-1.51V3a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v.2a1.65 1.65 0 0 0 .99 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.28a1.65 1.65 0 0 0 1.51.99H21a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-.2a1.65 1.65 0 0 0-1.51.99z"></path>
          </svg>
        </>
      ),
      url: "/account",
    },
    {
      name: "Logout",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </>
      ),
      isLogOutMenu: true,
    },
  ];
  return (
    <div className="group relative inline-block p-5">
      <button className="p-2 font-semibold text-blue-600 focus:outline-none flex flex-row gap-1">
        <span>
          <svg
            width="32"
            height="32"
            strokeWidth="2"
            className="stroke-blue-700"
          >
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M5.5 21a9.5 9.5 0 0 1 13 0"></path>
          </svg>
        </span>
        <span>ralam</span>
      </button>
      <ul className="hidden group-focus-within:block list-none absolute bg-gray-50 w-40 z-1 shadow-lg animate-slideIn">
        {userMenus.map((x, i) => (
          <li
            className="py-3 px-4 cursor-pointer text-xs font-semibold text-blue-700  hover:bg-blue-200"
            key={i}
          >
            <button
              aria-label={x.name}
              onClick={() => navigationHandler(x.url, x.isLogOutMenu)}
              className="flex flex-row gap-2 items-center w-full"
            >
              <span>{x.icon}</span>
              <span>{x.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMenu;

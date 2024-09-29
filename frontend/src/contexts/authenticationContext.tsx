"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import { IUser, IUserConext } from "./contexts.d";
import config from "@/config/config";

const AuthenticationContext = createContext<IUserConext>({});

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [user, setUser] = useState<null | IUser>(null);

  const setUserLoggedIn = (user: IUser) => {
    if (typeof window !== "undefined") {
      user?.token &&
        localStorage.setItem(config.LOCAL_STORAGE.TOKEN, user?.token);
      user?.username &&
        localStorage.setItem(config.LOCAL_STORAGE.USER_NAME, user?.username);
    }

    setUser(user);
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
  };

  const providerValue: IUserConext = {
    user,
    setUserLoggedIn,
    isLoggedIn: !!user,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    const initialState: IUser | null =
      typeof window !== "undefined" &&
      localStorage.getItem(config.LOCAL_STORAGE.TOKEN) &&
      localStorage.getItem(config.LOCAL_STORAGE.USER_NAME)
        ? {
            token: localStorage.getItem(config.LOCAL_STORAGE.TOKEN),
            username: localStorage.getItem(config.LOCAL_STORAGE.USER_NAME),
          }
        : null;
    setUser(initialState);
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    const handleStorageChange = (event: any) => {
      if (event.key === config.LOCAL_STORAGE.TOKEN) {
        if (!event.newValue && !!user) {
          logoutUser();
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [user]);

  return (
    <>
      {loading ? (
        <> </>
      ) : (
        <AuthenticationContext.Provider value={providerValue}>
          {children}
        </AuthenticationContext.Provider>
      )}
    </>
  );
};

export const useAuth = () => useContext(AuthenticationContext);

"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";
import { IUser, IUserConext } from "./contexts.d";
import config from "@/config/config";

const AuthenticationContext = createContext<IUserConext>({});

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const initialState: IUser | null =
    typeof window !== "undefined" &&
    localStorage.getItem(config.LOCAL_STORAGE.TOKEN) &&
    localStorage.getItem(config.LOCAL_STORAGE.USER_NAME)
      ? {
          token: localStorage.getItem(config.LOCAL_STORAGE.TOKEN),
          username: localStorage.getItem(config.LOCAL_STORAGE.USER_NAME),
        }
      : null;

  const [user, setUser] = useState<null | IUser>(initialState);

  const setUserLoggedIn = (user: IUser) => {
    if (typeof window !== "undefined") {
      user?.token &&
        localStorage.setItem(config.LOCAL_STORAGE.TOKEN, user?.token);
      user?.username &&
        localStorage.setItem(config.LOCAL_STORAGE.USER_NAME, user?.username);
    }

    setUser(user);
  };

  const providerValue: IUserConext = {
    user,
    setUserLoggedIn,
    isLoggedIn: !!user,
  };

  return (
    <AuthenticationContext.Provider value={providerValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticationContext);

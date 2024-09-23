"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";
import { IUser, IUserConext } from "./authenticationContext.d";

const AuthenticationContext = createContext<IUserConext>({});

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<null | IUser>(null);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticationContext);

"use client";
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

interface IUser {
  username?: string;
  email?: string;
  token?: string;
}

interface IUserConext {
  user?: IUser | null;
  setUser?: (user: any) => void;
}

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

export interface IUser {
  username?: string;
  email?: string;
  token?: string;
}

export interface IUserConext {
  user?: IUser | null;
  setUser?: (user: any) => void;
}

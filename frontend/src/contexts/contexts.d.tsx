export interface IUser {
  username?: string | null;
  token?: string | null;
}

export interface IUserConext {
  user?: IUser | null;
  setUserLoggedIn?: (user: any) => void;
  isLoggedIn?: boolean;
  logoutUser?: () => void;
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  owner_name: string;
  created_at: string;
  id: string;
}

export interface ICartContext {
  products: IProduct[];
  addToCart?: (product: IProduct) => void;
  removeFromCart?: (product: IProduct) => void;
  isExistsOnCart?: (product: IProduct) => boolean;
}

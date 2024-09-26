export interface IUser {
  username?: string | null;
  token?: string | null;
}

export interface IUserConext {
  user?: IUser | null;
  setUserLoggedIn?: (user: any) => void;
  isLoggedIn?: boolean;
}

export interface IProduct {
  title: string;
  description: string;
  price: number;
  owner: string;
  created_at: string;
  id: string;
}

export interface ICartContext {
  products: IProduct[];
  addToCart?: (product: IProduct) => void;
  removeFromCart?: (id: string) => void;
}

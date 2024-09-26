export interface IUser {
  username?: string;
  email?: string;
  token?: string;
}

export interface IUserConext {
  user?: IUser | null;
  setUser?: (user: any) => void;
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

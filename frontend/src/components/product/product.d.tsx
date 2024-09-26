import { IProduct } from "@/contexts/contexts.d";

export interface IProductCardProps {
  viewType: ViewType;
  product: IProduct;
  addToCart?: (product: IProduct) => void;
  removeFromCart?: (id: string) => void;
}

export interface IProductsProps {
  products: IProduct[];
  viewType: ViewType;
  addToCart?: (product: IProduct) => void;
  removeFromCart?: (id: string) => void;
}

export enum ViewType {
  LIST_VIEW,
  GRID_VIEW,
}

export type TCreateProduct = {
  title: string;
  price: number;
  description: string;
};

export type TUpdateProduct = {
  title: string;
  price: number;
  description: string;
};

export interface IProductsProps {
  products: IProduct[];
  viewType: ViewType;
}

export interface IViewToggleProps {
  viewType: ViewType;
  setViewType: (ViewType: ViewType) => void;
}

export interface IProductCardProps {
  title: string;
  description: string;
  price: number;
  tag: string;
  created_at?: string;
  viewType: ViewType;
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
  products: IProductCardProps[];
  viewType: ViewType;
}

export interface IViewToggleProps {
  viewType: ViewType;
  setViewType: (ViewType: ViewType) => void;
}

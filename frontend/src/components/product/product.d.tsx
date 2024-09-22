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

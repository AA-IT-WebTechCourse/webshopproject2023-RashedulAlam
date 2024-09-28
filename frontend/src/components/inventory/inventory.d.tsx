import { IProduct } from "@/contexts/contexts.d";

export enum ETabNames {
  SALE = "sale",
  SOLD = "sold",
  PURCHASED = "purchased",
}

export interface IInventoryCardProps {
  viewType: ETabNames;
  product: IProduct;
}

export interface IInventoryProps {}

export interface IPaginationResponse<T> {
  count: number;
  results: T[];
}

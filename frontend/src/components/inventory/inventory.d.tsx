export enum ETabNames {
  SALE = "sale",
  SOLD = "sold",
  PURCHASED = "purchased",
}

export interface IInventoryCardProps {
  title: string;
  description: string;
  price: number;
  created_by: string;
  purchased_by?: string;
  purchased_at?: string;
  created_at: string;
  viewType: ETabNames;
  id: string;
}

export interface IInventoryProps {}

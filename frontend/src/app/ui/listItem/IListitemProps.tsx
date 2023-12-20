import { PropsWithChildren } from "react";

export interface IListItemProps extends PropsWithChildren {
  title: string;
  description: string;
  price: number;
  imgSrc?: string;
  imgAlt?: string;
}

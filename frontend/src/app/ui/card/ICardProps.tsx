import { PropsWithChildren } from "react";

export interface ICardProps extends PropsWithChildren {
    title : string;
    description: string;
    price: number;
    imgSrc?: string;
    imgAlt?:string;
}
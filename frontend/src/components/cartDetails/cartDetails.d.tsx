import { IProduct } from "@/contexts/contexts.d";

export interface IPaymentResponse {
  error?: {
    [key: string]: string;
  };
  updated_products?: IProduct[];
}

export interface IPaymentRequestEnity {
  id: string;
  price: number;
}

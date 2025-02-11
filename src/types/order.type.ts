import { TUserType } from "./user.type";

export type TOrder = {
  _id: string;
  user: TUserType;
  products: [{ product: string; quantity: number; _id: string }];
  quantity: number;
  totalPrice: number;
  status: string;
  transaction: {
    id: string;
    transactionStatus: string;
  };
};

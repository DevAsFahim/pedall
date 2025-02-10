import { TBicycle } from "./bicycle.type";
import { TUserType } from "./user.type";

export type TOrder = {
  _id: string;
  user: TUserType;
  product: TBicycle;
  quantity: number;
  totalPrice: number;
};

import { IFoodItem } from "./foodItem";

export type TOrderItem = {
  quantity: number;
} & IFoodItem
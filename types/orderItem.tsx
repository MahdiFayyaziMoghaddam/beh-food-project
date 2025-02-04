import { IFoodItem } from "./foodItem";

export interface IOrderItem extends IFoodItem {
  quantity: number;
}
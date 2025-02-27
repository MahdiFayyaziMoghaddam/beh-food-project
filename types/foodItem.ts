export interface IFoodItem {
  id: number | string;
  name: string;
  order: string;
  price: number;
  offerPrice: number;
  category: 'lunch' | 'breakfast';
  image: string;
}
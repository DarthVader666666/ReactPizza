export interface CartSliceStateType {
  totalPrice: number;
  items: CatdType[];
  itemsAllTypeCart: CatdType[];
}
export type CatdType = {
  id: string;
  title: string;
  type: number[];
  size: number[];
  price: number;
  count: number;
  imageUrl: string;
  rating: number;
};

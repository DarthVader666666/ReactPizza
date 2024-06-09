export type FetchPizzasArgsType = Record<string, string | number>;
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

export enum Status {
  LOADING = "loading",
  SUCCES = "success",
  ERROR = "error",
}

export interface PizzaSliceStateType {
  itemsPizzas: CatdType[];
  status: Status; //loading|success|error
}

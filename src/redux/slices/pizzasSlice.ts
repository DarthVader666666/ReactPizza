import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type FetchPizzasArgsType = Record<string, string | number>;
type CatdType = {
  id: string;
  title: string;
  type: number[];
  size: number[];
  price: number;
  count: number;
  imageUrl: string;
  rating: number;
};

export const fetchPizzas = createAsyncThunk<
  CatdType[],
  Record<string, string | number>
>("pizzas/fetchPizzasStatus", async (params: FetchPizzasArgsType) => {
  const { order, sortBy, category, pageCount } = params;
  let { data } = await axios.get<CatdType[]>(
    `https://665b7403003609eda460ec36.mockapi.io/item?page=${pageCount}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`
  );

  return data;
});

export enum Status {
  LOADING = "loading",
  SUCCES = "success",
  ERROR = "error",
}

interface PizzaSliceStateType {
  itemsPizzas: CatdType[];
  status: Status; //loading|success|error
}

const initialState: PizzaSliceStateType = {
  itemsPizzas: [],
  status: Status.LOADING,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItemsPizzas(state, action: PayloadAction<CatdType[]>) {
      state.itemsPizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.itemsPizzas = [];
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<CatdType[]>) => {
        state.itemsPizzas = action.payload;
        state.status = Status.SUCCES;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.itemsPizzas = [];
    });
  },
});

export const { setItemsPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;

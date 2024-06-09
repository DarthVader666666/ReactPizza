import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatdType, PizzaSliceStateType, Status } from "./types";
import { fetchPizzas } from "./asyncActions";

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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, pageCount } = params;
    let { data } = await axios.get(
      `https://665b7403003609eda460ec36.mockapi.io/item?page=${pageCount}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`
    );
    return data;
  }
);

const initialState = {
  itemsPizzas: [],
  status: "loading", //loading|success|error
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItemsPizzas(state, action) {
      state.itemsPizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.itemsPizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.itemsPizzas = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = "error";
      state.itemsPizzas = [];
    });
  },
});

export const { setItemsPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;

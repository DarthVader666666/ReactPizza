import { createAsyncThunk } from "@reduxjs/toolkit";
import { CatdType, FetchPizzasArgsType } from "./types";
import axios from "axios";

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

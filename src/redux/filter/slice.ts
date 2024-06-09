import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterSlicStateType, SortType } from "./types";

const initialState: FilterSlicStateType = {
  categoryId: 0,
  sort: { name: "популярности", sortProperty: "rating" },
  input: "",
  pageCount: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setFiltersUrl(state, action: PayloadAction<FilterSlicStateType>) {
      state.pageCount = action.payload.pageCount;
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setInput, setSort, setPageCount, setFiltersUrl } =
  filterSlice.actions;

export default filterSlice.reducer;

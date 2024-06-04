import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "популярности", sortProperty: "rating" },
  input: "",
  pageCount: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setFiltersUrl(state, action) {
      state.pageCount = action.payload.pageCount;
      state.sort = Number(action.payload.sort);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setInput, setSort, setPageCount, setFiltersUrl } =
  filterSlice.actions;

export default filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "популярности", sortProperty: "rating" },
  input: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      console.log(action);
      state.categoryId = action.payload;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setInput, setSort } = filterSlice.actions;

export default filterSlice.reducer;

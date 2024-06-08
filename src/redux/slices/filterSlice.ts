import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

type SortType = {
  name: string;
  sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
};

interface FilterSlicStateType {
  categoryId: number;
  sort: SortType;
  input: string;
  pageCount: number;
}

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

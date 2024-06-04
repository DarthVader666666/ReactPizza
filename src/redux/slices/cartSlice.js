import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItemType = state.items.find(
        (obj) =>
          obj.type === action.payload.type && obj.size === action.payload.size
      );
      if (existingItemType) {
        existingItemType.count += 1;
        existingItemType.price += action.payload.price;
        // console.log(state.items, "count++");
      } else {
        action.payload.count = 1;
        state.items.push(action.payload);
        // console.log(state.items, "state.items");
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price += sum);
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id === action.payload);
    },
    clearItem(state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartState.actions;

export default cartState.reducer;

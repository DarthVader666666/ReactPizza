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
          obj.type === action.payload.type &&
          obj.size === action.payload.size &&
          obj.title === action.payload.title
      );
      if (existingItemType) {
        existingItemType.count += 1;
        existingItemType.price += action.payload.price;
        state.totalPrice += action.payload.price;
      } else {
        action.payload.count = 1;
        state.items.push(action.payload);
        state.totalPrice += action.payload.price;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id === action.payload);
    },
    clearItem(state, action) {
      state.items = [];
    },
    addOwnItem(state, action) {
      const existingItemType = state.items.find(
        (obj) =>
          obj.type === action.payload.type &&
          obj.size === action.payload.size &&
          obj.title === action.payload.title
      );

      if (existingItemType) {
        existingItemType.price =
          action.payload.price + action.payload.price / action.payload.count;
        existingItemType.count += 1;
        state.totalPrice += action.payload.price / action.payload.count;
      }
    },

    removeOwnItem(state, action) {
      const existingItemType = state.items.find(
        (obj) =>
          obj.type === action.payload.type &&
          obj.size === action.payload.size &&
          obj.title === action.payload.title
      );

      if (existingItemType) {
        if (existingItemType.count > 1) {
          existingItemType.price =
            action.payload.price - action.payload.price / action.payload.count;
          existingItemType.count -= 1;
          state.totalPrice -= action.payload.price / action.payload.count;
        } else {
        }
      }
    },
  },
});

export const { addItem, removeItem, clearItem, addOwnItem, removeOwnItem } =
  cartState.actions;

export default cartState.reducer;

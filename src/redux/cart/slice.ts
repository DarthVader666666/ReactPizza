import { createSlice } from "@reduxjs/toolkit";
import { CartSliceStateType } from "./types";

const initialState: CartSliceStateType = {
  totalPrice: 0,
  items: [],
  itemsAllTypeCart: [],
};

export const cartState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findAllItemType = state.itemsAllTypeCart.find(
        (obj) => obj.id === action.payload.id
      );

      if (findAllItemType) {
        findAllItemType.count++;
      } else {
        state.itemsAllTypeCart.push({
          ...action.payload,
          count: 1,
        });
      }

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

      const findAllItemType = state.itemsAllTypeCart.find(
        (obj) => obj.id === action.payload.id
      );
      if (findAllItemType) {
        findAllItemType.count++;
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
      const findAllItemType = state.itemsAllTypeCart.find(
        (obj) => obj.id === action.payload.id
      );
      if (findAllItemType) {
        findAllItemType.count--;
      }
    },
    clearAllItems(state) {
      state.items = [];
      state.itemsAllTypeCart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  addOwnItem,
  removeOwnItem,
  clearAllItems,
} = cartState.actions;

export default cartState.reducer;

import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

//equal of functions in hook useCart
export type CartActions =
  | { type: "add-to-cart"; payload: { item: Guitar } }
  | { type: "remove-from-cart"; payload: { item: Guitar["id"] } }
  | { type: "decrease-quantity"; payload: { item: Guitar["id"] } }
  | { type: "increase-quantity"; payload: { item: Guitar["id"] } }
  | { type: "clear-cart" };

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

export const initialState: CartState = {
  data: db,
  cart: [], //for now, it's a empty cart, but, this come from localstorage in the future
};

export const cartReducer = (state: CartState = initialState, action: CartActions) => {
  //Here logic or functions of the app
  if (action.type === "add-to-cart") {
    return {
      ...state,
    };
  }
  if (action.type === "remove-from-cart") {
    return {
      ...state,
    };
  }

  if (action.type === "decrease-quantity") {
    return {
      ...state,
    };
  }

  if (action.type === "increase-quantity") {
    return {
      ...state,
    };
  }

  if (action.type === "clear-cart") {
    return {
      ...state,
    };
  }

  return state;
};

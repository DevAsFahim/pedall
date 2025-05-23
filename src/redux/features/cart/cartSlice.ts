import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface ICartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  stockQuantity: number;
  imageUrl: string;
}

interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICartItem>) {
      const existingItem = state.items.find(
        (item) => item.product === action.payload.product
      );
      if (
        existingItem &&
        existingItem.stockQuantity <
          existingItem.quantity + action.payload.quantity
      ) {
        toast.error("Unavailable stock");
        return;
      }
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product === id);

      if (
        existingItem &&
        existingItem.quantity === quantity &&
        quantity != 1 &&
        existingItem.quantity != 1
      ) {
        toast.error("Unavailable stock");
        return;
      }

      if (existingItem && quantity > 0) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * existingItem.price;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.product === itemId);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.product !== itemId);
      }
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

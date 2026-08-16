import type { RootState } from "../../app/store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = (state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartSubtotal = (state: RootState) => state.cart.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
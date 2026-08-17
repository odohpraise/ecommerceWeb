import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CartUiState {
  toast: { productId: number; title: string } | null;
}

const initialState: CartUiState = { toast: null };

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState,
  reducers: {
    showAddedToCartToast: (
      state,
      action: PayloadAction<{ productId: number; title: string }>
    ) => {
      state.toast = action.payload;
    },
    dismissToast: (state) => {
      state.toast = null;
    },
  },
});

export const { showAddedToCartToast, dismissToast } = cartUiSlice.actions;
export default cartUiSlice.reducer;
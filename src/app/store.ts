import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/products/productsApi";
import cartReducer from '../features/cart/cartSlice';
import cartUiReducer from '../features/cartUi/cartUiSlice';
import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartUi: cartUiReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        wishlist: wishlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
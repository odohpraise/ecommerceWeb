import type { RootState } from "../../app/store";

export const selectWishlistItems = (state: RootState) => state.wishlist.items;

export const selectWishlistCount = (state: RootState) =>
    state.wishlist.items.length;

export const selectIsWishlisted = (id: number) => (state: RootState) =>
    state.wishlist.items.some((item) => item.id === id);
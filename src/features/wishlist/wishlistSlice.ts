import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface WishlistItem {
    id: number;
    title: string;
    thumbnail: string;
    category: string;
    price: number;
    discountPercentage: number;
    stock: number;
}

interface WishlistState {
    items: WishlistItem[];
}

const loadInitialState = (): WishlistState => {
    try {
        const raw = localStorage.getItem("wishlist");
        if (raw) return { items: JSON.parse(raw) };
    } catch {
        // ignore corrupted storage
    }
    return { items: [] };
};

const persist = (state: WishlistState) => {
    try {
        localStorage.setItem("wishlist", JSON.stringify(state.items));
    } catch {
        // storage unavailable, ignore
    }
};

const initialState: WishlistState = loadInitialState();

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
            const exists = state.items.find((i) => i.id === action.payload.id);
            if (exists) {
                state.items = state.items.filter((i) => i.id !== action.payload.id);
            } else {
                state.items.push(action.payload);
            }
            persist(state);
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
            persist(state);
        },
        clearWishlist: (state) => {
            state.items = [];
            persist(state);
        },
    },
});

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
    wishlistSlice.actions;
export default wishlistSlice.reducer;
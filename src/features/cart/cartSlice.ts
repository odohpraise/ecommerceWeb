import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

export interface CartItem {
    id: number;
    title: string;
    thumbnail: string;
    category: string;
    unitPrice: number;
    originalPrice: number;
    quantity: number;
    stock: number;
}
interface CartState {
    items: CartItem[]
}

const getDiscountedPrice = (product: Product) => Math.round((product.price * product.discountPercentage) / 100);

const loadInitialState = (): CartState => {
    try {
        const raw = localStorage.getItem("cart");
        if (raw) return { items: JSON.parse(raw) }
    } catch {
        // storage unavailable, ignore
    }
    return { items: [] };
}
const persist = (state: CartState) => {
    try {
        localStorage.setItem("cart", JSON.stringify(state.items))
    } catch (error) {
        console.log(error)
    }
}

const initialState: CartState = loadInitialState();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existing = state.items.find((item) => item.id === product.id)

            if (existing) {
                if (existing.quantity < existing.stock) existing.quantity += 1
            } else {
                state.items.push({
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    category: product.category,
                    unitPrice: getDiscountedPrice(product),
                    originalPrice: product.price,
                    quantity: 1,
                    stock: product.stock,
                });
            }
            persist(state)
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id != action.payload);
            persist(state)
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload)
            if (item && item.quantity < item.stock) item.quantity += 1;
            persist(state);
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload)
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    state.items.filter((i) => i.id != action.payload)
                }
            }
            persist(state);
        },
        setQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.items.find((i) => i.id === action.payload.id)

            if (item) {
                item.quantity = Math.max(1, Math.min(action.payload.quantity, item.stock))
            }
            persist(state)
        },
        clearCart: (state) => {
            state.items = [];
            persist(state);
        },
    },
});

export const {
    addToCart,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
    setQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
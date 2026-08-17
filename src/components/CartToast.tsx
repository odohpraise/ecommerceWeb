import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { dismissToast } from "../features/cartUi/cartUiSlice";
import "./CartToast.css";

export default function CartToast() {
    const dispatch = useAppDispatch();
    const toast = useAppSelector((state) => state.cartUi.toast);

    useEffect(() => {
        if (!toast) return;
        const timer = setTimeout(() => dispatch(dismissToast()), 3000);
        return () => clearTimeout(timer);
    }, [toast, dispatch]);

    if (!toast) return null;

    return (
        <div className="cart-toast" role="status">
            <span className="cart-toast-check">✓</span>
            <span className="cart-toast-text">
                <strong>{toast.title}</strong> added to cart
            </span>
            <Link
                to="/cart"
                className="cart-toast-link"
                onClick={() => dispatch(dismissToast())}
            >
                View Cart
            </Link>
            <button
                className="cart-toast-close"
                aria-label="Dismiss"
                onClick={() => dispatch(dismissToast())}
            >
                ×
            </button>
        </div>
    );
}
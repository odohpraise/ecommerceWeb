import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";
import { showAddedToCartToast } from "../features/cartUi/cartUiSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { selectIsWishlisted } from "../features/wishlist/wishlistSelectors";

import "./ProductCard.css";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const dispatch = useAppDispatch();
    const isWishlisted = useAppSelector(selectIsWishlisted(product.id));
    const [justAdded, setJustAdded] = useState(false);

    const discountedPrice =
        Math.round(
            (product.price - (product.price * product.discountPercentage) / 100) * 100
        ) / 100;
    const hasDiscount = product.discountPercentage > 0;

    const handleAdd = () => {
        dispatch(addToCart(product));
        dispatch(showAddedToCartToast({ productId: product.id, title: product.title }));
        setJustAdded(true);
    };

    // Revert the button label after a couple seconds, independent of the toast
    useEffect(() => {
        if (!justAdded) return;
        const timer = setTimeout(() => setJustAdded(false), 3000);
        return () => clearTimeout(timer);
    }, [justAdded]);

    const handleWishlistToggle = () => {
        dispatch(
            toggleWishlist({
                id: product.id,
                title: product.title,
                thumbnail: product.thumbnail,
                category: product.category,
                price: product.price,
                discountPercentage: product.discountPercentage,
                stock: product.stock,
            })
        );
    };

    return (
        <div className="product-card">
            <div className="product-card-image">
                <button
                    className={`product-card-wishlist ${isWishlisted ? "is-active" : ""}`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    onClick={handleWishlistToggle}
                >
                    <HeartIcon filled={isWishlisted} />
                </button>
                <img src={product.thumbnail} alt={product.title} loading="lazy" />

                <button
                    className={`product-card-add ${justAdded ? "is-added" : ""}`}
                    onClick={handleAdd}
                    disabled={product.stock === 0}
                >
                    {product.stock === 0
                        ? "Out of stock"
                        : justAdded
                            ? "Added to Cart ✓"
                            : "Add to Cart"}
                </button>
            </div>
            <div className="product-card-body">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-category">{product.category}</p>
                <div className="product-card-price">
                    {hasDiscount && <span className="price-original">${product.price}</span>}
                    <span className="price-current">${discountedPrice}</span>
                </div>
            </div>
        </div>
    );
}


function HeartIcon({ filled }: { filled: boolean }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}>
            <path
                d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.6 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
        </svg>
    );
}
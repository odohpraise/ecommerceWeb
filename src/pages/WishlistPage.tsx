import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectWishlistItems } from "../features/wishlist/wishlistSelectors";
import { removeFromWishlist, clearWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import type { WishlistItem } from "../features/wishlist/wishlistSlice";
import type { Product } from "../types/product";
import "./WishlistPage.css";

const toProduct = (item: WishlistItem): Product => ({
    id: item.id,
    title: item.title,
    description: "",
    category: item.category,
    price: item.price,
    discountPercentage: item.discountPercentage,
    rating: 0,
    stock: item.stock,
    thumbnail: item.thumbnail,
    images: [item.thumbnail],
});

export default function WishlistPage() {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectWishlistItems);

    if (items.length === 0) {
        return (
            <div className="container">
                <div className="page-heading">
                    <span className="eyebrow">Saved Items</span>
                    <h1>Your Wishlist</h1>
                </div>
                <div className="cart-empty">
                    <p>Your wishlist is empty.</p>
                    <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container cart-page">
            <div className="page-heading">
                <span className="eyebrow">Saved Items</span>
                <h1>Your Wishlist</h1>
            </div>

            <div className="cart-list">
                {items.map((item) => (
                    <div className="cart-row wishlist-row" key={item.id}>
                        <div className="cart-row-product">
                            <img src={item.thumbnail} alt={item.title} className="cart-row-img" />
                            <div className="cart-row-info">
                                <p className="cart-row-title">{item.title}</p>
                                <p className="cart-row-category">{item.category}</p>
                            </div>
                        </div>
                        <div className="cart-row-price">${item.price.toFixed(2)}</div>
                        <button
                            className="btn btn-outline"
                            onClick={() => dispatch(addToCart(toProduct(item)))}
                            disabled={item.stock === 0}
                        >
                            {item.stock === 0 ? "Out of stock" : "Add to Cart"}
                        </button>
                        <button
                            className="cart-row-remove"
                            aria-label={`Remove ${item.title}`}
                            onClick={() => dispatch(removeFromWishlist(item.id))}
                        >
                            ×
                        </button>
                    </div>
                ))}

                <div className="cart-list-actions">
                    <Link to="/" className="btn btn-outline">Continue Shopping</Link>
                    <button className="btn btn-outline btn-clear" onClick={() => dispatch(clearWishlist())}>
                        Clear Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";
import type { Product } from "../types/product";
import './ProductCard.css'

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {

    const dispatch = useAppDispatch();

    const discountedPrice =
        Math.round(
            (product.price - (product.price * product.discountPercentage) / 100) * 100
        ) / 100;
    const hasDiscount = product.discountPercentage > 0;

    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={product.thumbnail} alt={product.title} loading="lazy" />
                <button
                    className="product-card-add"
                    onClick={() => dispatch(addToCart(product))}
                >{product.stock === 0 ? "out of stock" : 'Add to cart'}</button>
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
    )
}

export default ProductCard
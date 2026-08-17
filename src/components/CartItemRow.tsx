import { useAppDispatch } from "../app/hooks";
import { decrementQuantity, incrementQuantity, removeFromCart, type CartItem } from "../features/cart/cartSlice";


interface Props {
    item: CartItem;
}
export default function CartItemRow({ item }: Props) {

    const dispatch = useAppDispatch();

    const lineTotal = Math.round(item.unitPrice * item.quantity * 100) / 100;

    return (
        <div className="cart-row">
            <div className="cart-row-product">
                <img src={item.thumbnail} alt={item.title} className="cart-row-img" />
                <div className="cart-row-info">
                    <p className="cart-row-title">{item.title}</p>
                    <p className="cart-row category">{item.category}</p>
                    <button className="cart-row-remove-mobile"
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >Remove</button>
                </div>
            </div>
            <div className="cart-row-price"
                data-label='Price'
            >
                ${item.unitPrice.toFixed(2)}
            </div>
            <div className="cart-row-quantity" data-label="Quantity">
                <div className="qty-stepper">
                    <button aria-label="Decrease quantity" onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button
                        aria-label="Increase quantity"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        disabled={item.quantity >= item.stock}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="cart-row-total" data-label="Total">${lineTotal.toFixed(2)}</div>

            <button
                className="cart-row-remove"
                aria-label={`Remove ${item.title} from cart`}
                onClick={() => dispatch(removeFromCart(item.id))}
            >
                ×
            </button>
        </div>
    )
}
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCartItems, selectCartSubtotal } from '../features/cart/cartSelectors';
import { Link } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import CartItemRow from '../components/CartItemRow';
import './Cartpage.css'

const SHIPPING_FLAT_RATE = 8;

const CartPage = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectCartItems);
    const subtotal = useAppSelector(selectCartSubtotal);
    const shipping = items.length > 0 ? SHIPPING_FLAT_RATE : 0;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="container">
                <div className="page-heading">
                    <span className="eyebrow">Shopping</span>
                    <h1>Your Cart</h1>
                </div>
                <div className="cart-empty">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                </div>
            </div>
        );
    }


    return (
        <div className="container cart-page">
            <div className="page-heading">
                <span className="eyebrow">Shopping</span>
                <h1>Your Cart</h1>
            </div>

            <div className="cart-layout">
                <div className="cart-list">
                    <div className="cart-row cart-row-head">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>
                    {items.map((item) => <CartItemRow key={item.id} item={item} />)}

                    <div className="cart-list-actions">
                        <Link to='/' className='btn btn-outline' >Continue Shopping</Link>
                        <button
                            className='btn btn-outline btn-clear'
                            onClick={() => dispatch(clearCart())}
                        >Clear Cart</button>
                    </div>
                </div>

                <aside className='cart-summary'>

                    <h2>Order Summary</h2>
                    <div className="cart-summary-row">
                        <span>subtotal</span><span>{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                    <div className="cart-summary-row cart-summary-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                    <button className="btn btn-primary cart-checkout">Proceed to Checkout</button>

                </aside>
            </div>
        </div>
    )
}

export default CartPage
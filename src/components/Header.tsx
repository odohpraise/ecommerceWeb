
import { useState } from 'react'
import { useAppSelector } from '../app/hooks';
import { selectCartCount } from '../features/cart/cartSelectors';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const NAV_LINKS = [
    { label: "Home", to: '/' },
    { label: "Shop", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
]



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const cartCount = useAppSelector(selectCartCount);

    return (
        <header className="site-header">
            <div className="topbar">
                <div className="container topbar-inner">
                    <span className="topbar-item">(225) 555-0118</span>
                    <span className="topbar-item topbar-email">michelle.rivera@example.com</span>
                    <span className="topbar-item topbar-promo">Follow Us and get a chance to win 80% off</span>
                    <span className="topbar-item topbar-follow">Follow Us</span>
                </div>
            </div>

            <div className="container navbar">
                <Link to="/" className='brand'>Bandage</Link>

                <nav className={`main-nav ${menuOpen ? "is-open" : ''}`}>

                    <ul>
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    end={link.to === '/'}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) => (isActive ? "active" : '')}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-actions">
                    <Link to="/cart" className="cart-link" aria-label="View cart">
                        <CartIcon />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <button
                        className="menu-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </header>
    )
}

function CartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 2-1.6L21 8H6"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="21" r="1.4" fill="currentColor" />
            <circle cx="18" cy="21" r="1.4" fill="currentColor" />
        </svg>
    );
}

export default Header;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCartCount } from "../features/cart/cartSelectors";
import "./Header.css";

const NAV_LINKS = [
  { label: "Home", to: "/", hasDropdown: false },
  { label: "Shop", to: "/", hasDropdown: true },
  { label: "About", to: "/about", hasDropdown: false },
  { label: "Blog", to: "/blog", hasDropdown: false },
  { label: "Contact", to: "/contact", hasDropdown: false },
  { label: "Pages", to: "/pages", hasDropdown: true },
];

const SOCIAL_LINKS = [
  { label: "Instagram", icon: <InstagramIcon /> },
  { label: "YouTube", icon: <YoutubeIcon /> },
  { label: "Facebook", icon: <FacebookIcon /> },
  { label: "Twitter", icon: <TwitterIcon /> },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useAppSelector(selectCartCount);
  // Wishlist isn't part of this assessment's scope, so it's a static
  // display value matching the design rather than live state.
  const wishlistCount = 1;

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-item topbar-contact">
            <PhoneIcon />
            (225) 555-0118
          </span>
          <span className="topbar-item topbar-contact topbar-email">
            <MailIcon />
            michelle.rivera@example.com
          </span>

          <span className="topbar-item topbar-promo">
            Follow Us and get a chance to win 80% off
          </span>

          <span className="topbar-item topbar-follow">
            Follow Us
            <span className="topbar-social">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href="#" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </span>
          </span>
        </div>
      </div>

      <div className="container navbar">
        <Link to="/" className="brand">
          Bandage
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDownIcon />}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/login" className="auth-link">
            <UserIcon />
            <span>Login / Register</span>
          </Link>

          <button className="icon-btn" aria-label="Search">
            <SearchIcon />
          </button>

          <Link to="/cart" className="icon-btn icon-link" aria-label="View cart">
            <CartIcon />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>

          <Link to="/wishlist" className="icon-btn icon-link" aria-label="Wishlist">
            <HeartIcon />
            {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          </Link>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.5l6 2.5-6 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2l1-3h-3v-1.5c0-.3.2-.5.5-.5H14z"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 5.5c-.7.3-1.4.5-2.2.6a3.8 3.8 0 001.7-2.1 7.6 7.6 0 01-2.4.9 3.8 3.8 0 00-6.5 3.5A10.8 10.8 0 013 4.9a3.8 3.8 0 001.2 5.1c-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.4 3 3.7-.5.2-1.1.2-1.7.1.5 1.5 1.9 2.6 3.6 2.6A7.7 7.7 0 013 17.6a10.8 10.8 0 005.9 1.7c7 0 10.9-5.9 10.9-11v-.5c.7-.5 1.4-1.2 1.9-2z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="chevron">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20s-7-4.4-9.5-9A5.5 5.5 0 0112 5.6 5.5 5.5 0 0121.5 11c-2.5 4.6-9.5 9-9.5 9z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 2-1.6L21 8H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="21" r="1.4" fill="currentColor" />
      <circle cx="18" cy="21" r="1.4" fill="currentColor" />
    </svg>
  );
}
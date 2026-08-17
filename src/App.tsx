import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import PlaceHolder from "./pages/PlaceHolder";
import CartToast from "./components/CartToast";
import WishlistPage from "./pages/WishlistPage";
function App() {
  return (
    <>
      <Header />
      <CartToast />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/about" element={<PlaceHolder title="About" />} />

          <Route path="/contact" element={<PlaceHolder title="Contact" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
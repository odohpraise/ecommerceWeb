import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import PlaceHolder from "./pages/PlaceHolder";
function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/about" element={<PlaceHolder title="About" />} />

          <Route path="/contact" element={<PlaceHolder title="Contact" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="after-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="products/product/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

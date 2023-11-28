import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from "./pages/Cart";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return(
    <BrowserRouter>
 <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
 <Footer />
  </BrowserRouter>
    )
}

export default App;

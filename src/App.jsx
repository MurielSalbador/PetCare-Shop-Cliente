import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from "./components/pages/Home/Home.jsx";
import Login from "./components/pages/income/login/Login.jsx";
import Register from "./components/pages/income/register/Register.jsx";
import Shop from "./components/pages/shop/Shop.jsx";
import CartHeader from "./components/pages/cart/cartHeader/CartHeader.jsx";
import ContactForm from "./components/pages/contact/ContactForm.jsx";
import FinishCart from "./components/pages/cart/finishCart/FinishCart.jsx";
import ProductList from "./components/pages/addProducts/addProductsList.jsx";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx';
import MyOrders from "./components/pages/cart/myOrders/MyOrders.jsx";
import Orders from './components/pages/OrdersClients/Orders.jsx';

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<CartHeader />} />
          <Route path="/finish" element={<FinishCart />} />
          <Route path="/allOrders" element={<Orders />} />
          <Route
            path="/addProducts"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

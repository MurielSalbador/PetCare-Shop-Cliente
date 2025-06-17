import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

//pagina principal
import Home from "./components/pages/Home/Home.jsx";

//login
import Login from "./components/pages/income/login/Login.jsx";

//faq
import FaqQuestions from "./components/pages/contact/FaqQuestions.jsx";

//passwordReset
import PwReset from "./components/pages/income/login/resetPassword/PasswordReset.jsx"

//forgotPassword
import ForgotPassword from "./components/pages/income/login/forgotPassword/ForgotPassword.jsx";

//register
import Register from "./components/pages/income/register/Register.jsx";

//tienda de productos
import Shop from "./components/pages/shop/Shop.jsx";

//carrito con localstorage para que se guarde lo elegido
import CartHeader from "./components/pages/cart/cartHeader/CartHeader.jsx";

//para mandar un email
import ContactForm from "./components/pages/contact/ContactForm.jsx";

//esto es para mandar el mensaje
import FinishCart from "./components/pages/cart/finishCart/FinishCart.jsx";

//crud
import ProductList from "./components/pages/addProducts/addProductsList.jsx";

//protected ProductList
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx'

//ordenes guardadas
import MyOrders from "./components/pages/orders/myOrders/MyOrders.jsx";

//mostras pedidos
import Orders from './components/pages/orders/OrdersClients/Orders.jsx';

// nueva página de detalle de producto
import ProductDetail from './components/pages/shop/onlyPage/ProductDetail.jsx';

//user management
import UserManagement from './components/pages/userManagement/UserManagement.jsx';

//redirect on reload
import ReloadRedirect from './components/pages/redirectOnPage/ReloadRedirect.jsx';

//notFound
import PageNotFound from './components/pages/notFound/PageNotFound.jsx';


//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<CartHeader />} />
          <Route path="/finish" element={<FinishCart />} />
          <Route path="/allOrders" element={<Orders />} />
          <Route path="/faq" element={<FaqQuestions />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<PwReset />} />
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
          <Route path="/httpClients" element={<UserManagement />} />
          <Route path="/reloadredirect" element={<ReloadRedirect />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

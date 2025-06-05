import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

//cart
import { FiltersProvider } from "../../../context/filters.jsx";
import ProductList from "../cart/Cart/ProductList.jsx";
import Cart from "../cart/Cart/Cart.jsx";
import Filters from "../cart/Cart/Filters.jsx";

//protected
import { isAdminOrSuperAdmin, isSuperAdmin } from "../../../utils/auth.js";

//account
import AccountButton from "../income/account/AccountButton.jsx";

//styles
import "./Shop.css";

const queryClient = new QueryClient();

const Shop = () => {
  const [showCart, setShowCart] = useState(false);

  //boton cerrar redirija a shop cuando esta en shop
  localStorage.setItem("fromPage", "shop");
  <Link to="/cart" state={{ from: "shop" }}>
    🛒 Mi carrito
  </Link>;

  return (
    <>
      <header className="main-header">
        <div className="header-actions">
          <div className="nav-logo">
            <a
              href="/"
              className="logo-text"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="logo-line-1">PetCare</div>
              <div className="logo-line-2">Shop</div>
            </a>
          </div>

          <ul className="nav-center">
            <li>
              <a href="/" className="link">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                <i className="fa-solid fa-envelope"></i> Contactanos
              </a>
            </li>
             <li>
              <a href="/shop" className="link">
                <i className="fa-solid fa-shop"></i> Tienda
              </a>
            </li>
            <li>
              <a href="/myOrders" className="link">
                <i className="fa-solid fa-envelope"></i> Pedidos
              </a>
            </li>
            {isSuperAdmin() && (
              <li>
                <a href="/httpClients" className="link">
                  <i className="fa-solid fa-envelope"></i> Usuarios
                </a>
              </li>
            )}
          </ul>

          <ul className="nav-right">
            <li>
              <a href="/cart" className="link">
                <i className="fa-solid fa-cart-shopping"></i> Mi carrito
              </a>
            </li>
            <li>
              <div className="link">
                <AccountButton />
              </div>
            </li>
          </ul>
        </div>
      </header>

      <QueryClientProvider client={queryClient}>
        <FiltersProvider>
          <main className="main" 
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200">
            <div className="container">
  
              {isAdminOrSuperAdmin() && (
                <div className="classButtonAdd">
                  <Link to="/addProducts">Gestión de Productos</Link>
                </div>
              )}

              <div className="content">
                <div className="products-wrapper">
                  <ProductList />
                </div>
                <div className="cart">
                  <div>
                    <Filters />
                  </div>
                  <Cart />
                  <div className="classButton">
                    <Link to="/finish">Finalizar tu compra</Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </FiltersProvider>
      </QueryClientProvider>
    </>
  );
};

export default Shop;

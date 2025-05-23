import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ProductList from "../cart/Cart/ProductList.jsx";
import Cart from "../cart/Cart/Cart.jsx";
import { FiltersProvider } from "../../../context/filters.jsx";
import Filters from "../cart/Cart/Filters.jsx";
import { Link } from "react-router-dom";
import "./Shop.css";

const queryClient = new QueryClient();

const Shop = () => {
  const [showCart, setShowCart] = useState(false);

  
  //boton cerrar redirija a shop cuando esta en shop
  localStorage.setItem("fromPage", "shop"); // o "home"
  <Link to="/cart" state={{ from: "shop" }}>
    🛒 Mi carrito
  </Link>;


  return (
    <>
      <header className="main-header">
        <div className="header-actions">
          {/* Navegación izquierda */}
          <ul className="nav-left">
            <li>
              <a href="#" className="logo">
                <i className="fa-brands fa-pied-piper-alt"></i>
              </a>
            </li>
            <li>
              <a href="/" className="link">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="/addProducts" className="link">
                <i className="fa-solid fa-info-circle"></i> Conocenos
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                <i className="fa-solid fa-envelope"></i> Contactanos
              </a>
            </li>
            <li>
              <a href="/list" className="link">
                <i className="fa-solid fa-envelope"></i> Pedidos
              </a>
            </li>
          </ul>

          {/* Navegación derecha */}
          <ul className="nav-right">
            <li>
              <a href="/cart" className="link">
                <i className="fa-solid fa-cart-shopping"></i> Mi carrito
              </a>
            </li>
            <li>
              <a href="/login" className="link" id="hire-me">
                <i className="fa-regular fa-user"></i> Mi cuenta
              </a>
            </li>
          </ul>
        </div>
      </header>

      <QueryClientProvider client={queryClient}>
        <FiltersProvider>
          <main className="main">
            <div className="container">
              <h1 className="page-title"> Product List</h1>
              <Filters />
              <div className="content">
                <div className="products-wrapper">
                  <ProductList />
                </div>
                <div className="cart">
                  <Cart />
                  <div>
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

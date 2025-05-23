import React, { useState, useEffect } from "react";
import { useProducts } from "../../../../../Mayorista-Api/src/hooks/serch/useProducts.js";
import { Products } from "../serch/productsList.jsx";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  const [search, setSearch] = useState("");
  const { products, getProducts, loading } = useProducts({
    search,
    sort: false,
  });


  //boton cerrar redirija a home cuando esta en home
  localStorage.setItem("fromPage", "home"); // o "home"


  useEffect(() => {
    getProducts({ search });
  }, [search, getProducts]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
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
                <i className="fa-solid fa-cart-shopping"></i>  Mi carrito
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

      <div className="tienda button">
        <h2>¡Visitá nuestra tienda para ver todos los productos!</h2>
        <Link to="/shop">
          <button>Tienda</button>
        </Link>
      </div>

      <Carousel fade controls={false} indicators={false} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://acdn-us.mitiendanube.com/stores/002/428/163/themes/amazonas/1-slide-1746809340135-8547998733-43943e1e987d4614f61aaaa933f8afac1746809342-1920-1920.png?148558823"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://acdn-us.mitiendanube.com/stores/002/428/163/themes/amazonas/1-slide-1728044319277-8878296151-521c6b8ebac3a32296d4c6b84223ade61728044317-1920-1920.png?148558823"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://acdn-us.mitiendanube.com/stores/002/428/163/themes/amazonas/1-slide-1727106214782-3375990206-7e890d772242eb0ff9c2f9cb44ea91511727106211-1920-1920.png?148558823"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <main className="main-content">
        <div className="main-wrapper">
          <section className="search-bar">
            <h2>¿Qué está buscando?</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Buscando Producto..."
                value={search}
                onChange={handleInputChange}
              />
              <button>→</button>
            </div>
          </section>

          <section className="product-list">
            {loading ? <p>Loading...</p> : <Products products={products} />}
          </section>
        </div>
      </main>

      <section className="categories">
        <h3>Algunos de nuestros productos!</h3>
        <div className="category-items">
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/3-8355791aacba83caa917271887025177-480-0.webp"
              alt="Granola Pasas de Uva y Almendras x 300gr"
            />
            <span>Granola Pasas de Uva y Almendras x 300gr</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/4-014bf2d2580c9182f317424005608787-1024-1024.webp"
              alt="Barras de Cereal Pasas de Uva x 45 grs"
            />
            <span>Barras de Cereal Pasas de Uva x 45 grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/4-bdca41a5bbbb4d99e917271885875888-1024-1024.webp"
              alt="Granola Natural x 300grs"
            />
            <span>Granola Natural x 300grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/5-54b3c3f7cc10829ce817424004730174-1024-1024.webp"
              alt="Barras de Cereal Coco x 45 grs"
            />
            <span>Barras de Cereal Coco x 45 grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/19-05487ea95382c80f0917271884686041-1024-1024.webp"
              alt="Granola VeganMAX x 300grs"
            />
            <span>Granola VeganMAX x 300grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/18-0d36c297c7a1a51f9e17271887482389-1024-1024.webp"
              alt="Granola Chocolate y Nuez x 1kg"
            />
            <span>Granola Chocolate y Nuez x 1kg</span>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <p>&copy; 2025 Mayorista. All rights reserved.</p>
      </footer>
    </div>
  );
}

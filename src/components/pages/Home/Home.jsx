import React, { useState, useEffect } from "react";
import { useProducts } from "../../../../../Mayorista-Api/src/hooks/serch/useProducts.js";
import { Products } from "../serch/productsList.jsx";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../../assets/LogoMayorista-Photoroom.png";
import Wellcome from "../../../assets/GranoWelcome-Photoroom.png";

//account
import AccountButton from "../income/account/AccountButton.jsx";

export default function Home() {
  const [search, setSearch] = useState("");
  const { products, getProducts, loading } = useProducts({
    search,
    sort: false,
  });

  const [userName, setUserName] = useState("");
  const [featuredProducts, setFeaturedProducts] = useState([]);

  localStorage.setItem("fromPage", "home");

  useEffect(() => {
    getProducts({ search });
  }, [search, getProducts]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.username) {
          setUserName(parsedUser.username);
        }
      } catch (error) {
        console.error("Error al parsear el usuario:", error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setFeaturedProducts(data.slice(0, 6));
      } catch (error) {
        console.error("Error al cargar productos destacados:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="main-header">
        <div className="header-actions">
          <div className="nav-logo">
            <a href="/" className="logo">
              <img src={Logo} alt="Logo" className="logo-img" />
            </a>
          </div>

          <ul className="nav-center">
            <li>
              <a href="/" className="link">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="/conocenos" className="link">
                <i className="fa-solid fa-info-circle"></i> Conocenos
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                <i className="fa-solid fa-envelope"></i> Contactanos
              </a>
            </li>
            <li>
              <a href="/myOrders" className="link">
                <i className="fa-solid fa-envelope"></i> Pedidos
              </a>
            </li>
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


    {/* CAROUSEL */}
      <section className="carousel-section">
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
      </section>


      {/* WELCOME SECTION */}
      <section className="hero-welcome-section">
        <div className="welcome-card">
          <img src={Wellcome} alt="Welcome" className="welcome-img" />
          {userName && (
            <div className="welcome-message">¡Bienvenid@, {userName}!</div>
          )}
        </div>


      {/* tienda */}
        <div className="shop-invite">
          <h2>¡Visitá nuestra tienda para ver todos los productos!</h2>
          <Link to="/shop">
            <button className="shop-button">Tienda</button>
          </Link>
        </div>
      </section>

     

      {/* MAIN CONTENT */}
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

      {/* FEATURED PRODUCTS */}
      <section className="categories">
        <h3 className="section-title">Algunos de nuestros productos</h3>
        <div className="category-items-grid">
          {featuredProducts.map((product) => (
            <div className="category-card" key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="category-image"
              />
              <div className="category-title">{product.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <p>&copy; 2025 Mayorista. All rights reserved.</p>
      </footer>
    </div>
  );
}

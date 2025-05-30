import React, { useState, useEffect } from "react";
import { useProducts } from "../../../../../PetCare-Shop-Server/src/hooks/serch/useProducts.js";
import { Products } from "../serch/productsList.jsx";
import { Link } from "react-router-dom";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../../assets/LogoMayorista-Photoroom.png";
import Banner1 from "../../../assets/banner1.png"
import Banner2 from "../../../assets/banner2.png"
import Banner3 from "../../../assets/banner3.png"
import { Container, Row, Col, Button, Card } from "react-bootstrap";  

//account
import AccountButton from "../income/account/AccountButton.jsx";

export default function Home() {
  const [search, setSearch] = useState("");
  const { products, getProducts, loading } = useProducts({
    search,
    sort: false,
  });

  //wellcome
  const [userName, setUserName] = useState("");

  //products
  const [featuredProducts, setFeaturedProducts] = useState([]);


  //redirigir a pages
  localStorage.setItem("fromPage", "home");

  useEffect(() => {
    getProducts({ search });
  }, [search, getProducts]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  //welcome
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
    } else {
      console.warn("No se encontró un usuario válido en localStorage.");
    }
  }, []);

  //productos en bbdd
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
              <a href="/pedidos" className="link">
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
              <div className="link" id="hire-me">
                <i className="fa-regular fa-user"></i><AccountButton/>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <Carousel fade controls={false} indicators={false} interval={6000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner3}
            alt="First slide"
          />
          <div className="carousel-text-container">
            {userName && (
              <h2 className="carousel-welcome">¡Bienvenid@, {userName}!</h2>
            )}
            <p className="carousel-subtitle">¡Visitá nuestra tienda para ver todos los productos!</p>
            <Link to="/shop">
              <button className="shop-button">Tienda</button>
            </Link>
          </div>
        </Carousel.Item>
             <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
          />
          <div className="carousel-text-container">
            {userName && (
              <h2 className="carousel-welcome">¡Bienvenid@, {userName}!</h2>
            )}
            <p className="carousel-subtitle">¡Visitá nuestra tienda para ver todos los productos!</p>
            <Link to="/shop">
              <button className="shop-button">Tienda</button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="First slide"
          />
          <div className="carousel-text-container">
            {userName && (
              <h2 className="carousel-welcome">¡Bienvenid@, {userName}!</h2>
            )}
            <p className="carousel-subtitle">¡Visitá nuestra tienda para ver todos los productos!</p>
            <Link to="/shop">
              <button className="shop-button">Tienda</button>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>

      <Container fluid className="bg-light py-3">
        <Row className="text-center justify-content-center align-items-center">
          <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2">
            <i className="fa-solid fa-truck-fast fa-2x text-danger"></i>
            <div>
              <strong>ENVÍO GRATIS</strong>
              <br />
              En Rosario y alrededores por compras desde $10.000
            </div>
          </Col>
          <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2 border-start border-end">
            <i className="fa-solid fa-paw fa-2x text-success"></i>
            <div>
              <strong>+100 PRODUCTOS</strong>
              <br />
              Para perros, gatos y más
            </div>
          </Col>
          <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2">
            <i className="fa-solid fa-shield-dog fa-2x text-warning"></i>
            <div>
              <strong>ASESORAMIENTO VETERINARIO</strong>
              <br />
              Consultá con nuestro equipo profesional
            </div>
          </Col>
        </Row>
      </Container>

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

      {/* Productos destacados */}
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

      <footer className="main-footer">
        <p>&copy; 2025 PetCareShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

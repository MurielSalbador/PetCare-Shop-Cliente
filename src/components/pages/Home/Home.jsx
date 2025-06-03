import React, { useState, useEffect } from "react";
import { useProducts } from "../../../../../PetCare-Shop-Server/src/hooks/serch/useProducts.js";
import { Products } from "../serch/productsList.jsx";
import { Link } from "react-router-dom";
import "./Home.css";
import cuteDog from "../../../assets/cuteDog2.png"
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
            <a href="/" className="logo-text"
                 data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="200">
              <div className="logo-line-1">PetCare</div>
              <div className="logo-line-2">Shop</div>
            </a>
          </div>
          <ul className="nav-center"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="200"
              >
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
              <a href="/myOrders" className="link">
                <i className="fa-solid fa-box"></i> Pedidos
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
                <i className="fa-regular fa-user"></i>
                <AccountButton />
              </div>
            </li>
          </ul>
        </div>
      </header>
      
<section
  className="home-hero-section"
  data-aos="fade-right"
  data-aos-duration="700"
  data-aos-delay="200"
>
 <img
  src={cuteDog}
  alt="Mascota"
  className="home-hero-image"
  style={{ transform: 'scaleX(-1)' }}
  data-aos="fade-right"
  data-aos-duration="800"
/>
  <div className="home-hero-content">
    {userName && <h2 className="home-hero-welcome">¡Bienvenid@, {userName}!</h2>}
    <h1 className="home-hero-title">Descubrí lo que tenemos para tu mascota</h1>
    <p>
      Productos seleccionados con amor para que tu mascota esté feliz, sana y bien cuidada.
    </p>
    <p>Porque sabemos que no son solo mascotas, son parte de tu familia.</p>
    <Link to="/shop">
      <button className="home-hero-button">Ir a la tienda</button>
    </Link>
  </div>
</section>

      <Container fluid className="bg-light py-3">
        <Row className="text-center justify-content-center align-items-center">
          <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2">
            <i className="fa-solid fa-truck-fast fa-2x text-dark"></i>
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
                placeholder="Buscar producto..."
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

      <section className="feature-showcase py-5 bg-light">
  <Container>
  {/* Parte de las 3 imágenes con títulos */}
  <Row className="mb-5 text-center">
    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-duration="800">
      <img src="https://img.aosomcdn.com/thumbnail/100/n0/product/2023/11/14/PaT42b18bccca1f0c.jpg.webp" alt="Cuidado mascota" className="img-fluid rounded mb-3" />
      <h5>Proper Pet Care</h5>
      <p>Tenemos los mejores productos para tu mascota. ¡Visitá nuestra tienda hoy mismo!</p>
    </Col>
    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
      <img src="https://m.media-amazon.com/images/I/81HYU4s7e5L.jpg" alt="Accesorios" className="img-fluid rounded mb-3" />
      <h5>Pet Accessories</h5>
      <p>Desde comederos hasta juguetes. Todo lo que tu mascota necesita, en un solo lugar.</p>
    </Col>
    <Col md={4} className="mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
      <img src="https://www.eastwestbasics.com/wp-content/uploads/Pet-Products.jpg" alt="Veterinaria" className="img-fluid rounded mb-3" />
      <h5>Productos naturales</h5>
      <p>Sin químicos ni aditivos. Todo lo mejor para su salud.</p>
    </Col>
  </Row>

  {/* Parte de beneficios con íconos */}
  <Row className="text-center">
    <Col md={3} data-aos="zoom-in" data-aos-duration="700">
      <i className="fa-solid fa-headset fa-2x mb-2 text-dark"></i>
      <h6>Soporte disponible 24/7</h6>
      <p>Estamos para ayudarte todos los días de la semana.</p>
    </Col>
    <Col md={3} data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100">
      <i className="fa-solid fa-truck-fast fa-2x mb-2 text-dark"></i>
      <h6>Envio sin cargo!</h6>
      <p>Envío gratuito a partir de $30.000 ARS.</p>
    </Col>
    <Col md={3} data-aos="zoom-in" data-aos-duration="700" data-aos-delay="200">
      <i className="fa-solid fa-rotate-left fa-2x mb-2 text-dark"></i>
      <h6>Devolucion en 7 días</h6>
      <p>Devolución inmediata en caso de fallas.</p>
    </Col>
    <Col md={3} data-aos="zoom-in" data-aos-duration="700" data-aos-delay="300">
      <i className="fa-solid fa-paw fa-2x mb-2 text-dark"></i>
      <h6>calidad garantizada</h6>
      <p>Si no estás conforme, te devolvemos tu dinero.</p>
    </Col>
  </Row>
</Container>
</section>

    {/* Productos destacados */}
<section className="categories">
  <h3 className="section-title">Algunos de nuestros productos</h3>
  <div className="category-grid">
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

    <footer className="footer">
      <div className="footer-container">
      <div className="footer-logo-container">
        <div className="footer-logo-text">
          <div className="logo-line-1">PetCare</div>
          <div className="logo-line-2">Shop</div>
        </div>
      </div>
        <div className="footer-info">
          <h3 className="footer-title">PetCare © 2025</h3>
          <p className="footer-text">
            Sistema de gestión para veterinarias y pet shops.<br />
            Brindamos soluciones modernas para el cuidado de tus mascotas.
          </p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:contacto@petcare.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </footer>
    </div>
  );
}

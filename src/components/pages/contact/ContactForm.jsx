import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { useNavigate } from "react-router-dom";
import AccountButton from "../income/account/AccountButton.jsx";
import cuteDog from "../../../assets/dogbannercontact.png";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

//protected
import { isAdminOrSuperAdmin } from "../../../utils/auth.js";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9u217y",
        "template_lwc97il",
        form.current,
        "UkWj1Chi6zu-WlxCw"
      )
      .then(
        (result) => {
          console.log("Mensaje enviado ✅", result.text);
          alert("¡Mensaje enviado con éxito!");
          form.current.reset();
          setTimeout(() => {
            navigate("/");
          }, 1500);
        },
        (error) => {
          console.log("Error ❌", error.text);
          alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <>
      {/* ========== HEADER ========== */}
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
              <div className="logo-line-1">RubioHnos</div>
              <div className="logo-line-2">mayorista</div>
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
              <a href="/myOrders" className="link">
                <i className="fa-solid fa-envelope"></i> Pedidos
              </a>
            </li>
            {isAdminOrSuperAdmin() && (
              <li>
                <a href="/httpClients" className="link">
                  <i className="fa-solid fa-envelope"></i> Clientes
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

      <section
        className="hero-section"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div className="hero-content">
          <h1>Cuidamos lo que más querés</h1>
          <p>
            Productos seleccionados con amor para que tu mascota esté feliz,
            sana y bien cuidada.
          </p>
          <p>
            Porque sabemos que no son solo mascotas son parte de tu familia.
          </p>
          <button
            type="button"
            className="hero-button"
            onClick={() => {
              const faqSection = document.getElementById("faq");
              faqSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Más info
          </button>
        </div>
        <img src={cuteDog} alt="Perro" className="hero-dog" />
        <div className="hero-bottom-mask"></div>
      </section>

      <section className="contact-info-cards" data-aos-delay="100">
        <div className="card" data-aos="fade-up">
          <div className="card-icon">
            <i className="fa-solid fa-paw"></i>
          </div>
          <h3>Quiénes Somos</h3>
          <p>
            Somos amantes de los animales, dedicados a su bienestar y felicidad.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <div className="card-icon">
            <i className="fa-solid fa-handshake-simple"></i>
          </div>
          <h3>Cómo Trabajamos</h3>
          <p>
            Brindamos atención personalizada para cada necesidad de tu mascota.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="500">
          <div className="card-icon">
            <i className="fa-solid fa-award"></i>
          </div>
          <h3>Mejores Servicios</h3>
          <p>Calidad, confianza y compromiso en cada producto y atención.</p>
        </div>
      </section>

      {/* Acordeón de Preguntas Frecuentes */}
      <section
        className="faq-section"
        id="faq"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h2 className="title">Preguntas Frecuentes</h2>
        <details data-aos="fade-right" data-aos-delay="100">
          <summary>¿Hacen envíos a domicilio?</summary>
          <p>Sí, realizamos envíos en Rosario y alrededores en el mismo día.</p>
        </details>
        <details data-aos="fade-left" data-aos-delay="400">
          <summary>¿Cómo puedo hacer un pedido?</summary>
          <p>Podés hacer tu pedido por la tienda online o vía WhatsApp.</p>
        </details>
        <details data-aos="fade-right" data-aos-delay="400">
          <summary>¿Qué medios de pago aceptan?</summary>
          <p>
            Aceptamos transferencias, tarjetas de débito/crédito y efectivo.
          </p>
        </details>
        <details data-aos="fade-left" data-aos-delay="100">
          <summary>¿Tienen atención veterinaria?</summary>
          <p>
            No brindamos atención veterinaria, pero trabajamos con profesionales
            aliados.
          </p>
        </details>
      </section>

      {/* Ubicación y Horarios */}
      <section
        className="location-section"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2 className="title">¿Dónde Estamos?</h2>
        <p>
          <strong>Dirección:</strong> Calle 1234, Rosario, Santa Fe
        </p>
        <p>
          <strong>Horarios:</strong> Lunes a Sábado de 9:00 a 18:00 hs
        </p>
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* ========== SECCIÓN DE CONTACTO ========== */}

      <div className="contact-section-two-columns">
        {/* Columna izquierda: Información de contacto */}
        <div className="contact-info-left">
          <h2>¡Contactanos!</h2>
          <p>
            No te quedes con dudas.
            <br />
            Te asistiremos en todo lo que necesites.
          </p>

          <div className="contact-item">
            <i className="fa-brands fa-whatsapp"></i>
            <div>
              <strong>WhatsApp</strong>
              <br />
              +54 341 123-4567
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <strong>Teléfono fijo</strong>
              <br />
              341 456 7891
            </div>
          </div>

          <div className="contact-item">
            <i className="fa-brands fa-instagram"></i>
            <div>
              <strong>Instagram</strong>
              <br />
              @PetCare-Shop
            </div>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <form ref={form} onSubmit={sendEmail} className="contact-form-right">
          <label>Primer Nombre *</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre (obligatorio)"
            required
          />
          <label>Dirección de Correo electrónico *</label>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu mail (obligatorio)"
            required
          />
          <label>Número de Teléfono</label>
          <input
            type="text"
            name="subject"
            placeholder="Ingresa tu número de celular (opcional)"
          />
          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Ingresá tu mensaje..."
            maxLength={180}
            required
          ></textarea>
          <div style={{ textAlign: "right", fontSize: "0.8rem" }}>0 / 180</div>
          <button type="submit">Enviar</button>
        </form>
      </div>

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
              Sistema de gestión para veterinarias y pet shops.
              <br />
              Brindamos soluciones modernas para el cuidado de tus mascotas.
            </p>
          </div>
          <div className="footer-socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
    </>
  );
};

export default ContactForm;

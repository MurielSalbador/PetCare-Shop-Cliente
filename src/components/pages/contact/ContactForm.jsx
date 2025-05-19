
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from "react-router-dom";

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
          navigate('/');
        }, 1500);
        },
        (error) => {
          console.log("Error ❌", error.text);
          alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <div className="container-contact">
  <div className="contact-close">
    <CloseButton aria-label="Cerrar formulario" onClick={() => navigate('/')} />
  </div>
  <form ref={form} onSubmit={sendEmail} className="contact-form">
    <h2 className="title">Contáctanos</h2>
    <input
      type="text"
      name="name"
      placeholder="Tu nombre"
      required
      className="contact-input"
    />
    <input
      type="email"
      name="email"
      placeholder="Tu correo"
      required
      className="contact-input"
    />
    <input
      type="text"
      name="subject"
      placeholder="Asunto"
      className="contact-input"
    />
    <textarea
      name="message"
      placeholder="Tu mensaje"
      rows="5"
      required
      className="contact-textarea"
    ></textarea>
    <button type="submit" className="contact-button">
      Enviar
    </button>
  </form>
</div>

  );
};

export default ContactForm;

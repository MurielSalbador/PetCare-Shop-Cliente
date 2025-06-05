import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordReset.css';
import { FaKey } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (!email.trim() || !emailRegex.test(email)) {
      return; // Error, no enviar
    }

    toast.success(`Si el correo está registrado, te enviamos un enlace a ${email}`);

    setEmail('');
    setValidated(false);

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const isEmpty = validated && !email.trim();
  const isInvalidFormat = validated && email.trim() && !emailRegex.test(email);

  return (
    <div className="password-reset__page" >
      <form className="password-reset__card" onSubmit={handleSubmit} noValidate 
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="200">
        <div className="password-reset__icon"><FaKey size={40} /></div>
        <h2 className="password-reset__title">¿Problemas para iniciar sesión?</h2>
        <p className="password-reset__desc">
          Ingresá tu correo y te enviaremos un enlace para recuperar tu cuenta.
        </p>
        <input
          type="email"
          placeholder="Ingresá tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`password-reset__input ${(isEmpty || isInvalidFormat) ? 'is-invalid' : ''}`}
          aria-invalid={isEmpty || isInvalidFormat}
        />
        {isEmpty && (
          <div className="password-reset__error">Por favor, ingresá tu correo electrónico.</div>
        )}
        {isInvalidFormat && (
          <div className="password-reset__error">Por favor, ingresá un correo electrónico válido.</div>
        )}
        <button type="submit" className="password-reset__button">Enviar enlace de acceso</button>

        <a href="#" className="password-reset__link">¿No podés restablecer tu contraseña?</a>

        <div className="password-reset__divider"><span>O</span></div>

        <a
          href="#"
          className="password-reset__link password-reset__link--strong"
          onClick={() => navigate('/register')}
        >
          Crear nueva cuenta
        </a>

        <button
          type="button"
          className="password-reset__back"
          onClick={() => navigate('/login')}
        >
          Volver al Login
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} pauseOnHover theme="dark" />
    </div>
  );
};

export default PasswordReset;

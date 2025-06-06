import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // <-- IMPORTAR
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // <-- HOOK

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/password/forgot-password", {
        email,
      });

      toast.success(res.data.message || "Correo de recuperación enviado.");

      setTimeout(() => {
        navigate("/login");  // <-- redirigir a login
      }, 2500);  // espera 2.5 segundos para que se vea el toast
    } catch (err) {
      toast.error("Error en el servidor al enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>¿Olvidaste tu contraseña?</h2>
      <p>Ingresá tu correo para recibir el enlace de recuperación.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar enlace"}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ForgotPassword;

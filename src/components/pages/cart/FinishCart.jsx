import { useState } from "react";
import { useCart } from "../../../store";
import { useNavigate } from "react-router-dom";
import ModalPurchase from "../../modal/ModalPurchase.jsx";
import CloseButton from "react-bootstrap/CloseButton";
import styles from "./FinishCart.module.css";

const FinishCart = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, city, address } = formData;

    if (name.trim().length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }
    if (city.trim().length < 2) {
      alert("La localidad debe tener al menos 2 caracteres.");
      return;
    }
    if (address.trim().length < 5) {
      alert("La dirección debe tener al menos 5 caracteres.");
      return;
    }

    const newOrder = {
      name,
      city,
      address,
      date: new Date().toLocaleString(),
      items: cart,
      total: total.toFixed(2),
    };

    const previousOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...previousOrders, newOrder]));

    const message = `
🛒 *Nuevo Pedido Realizado*:

👤 *Nombre:* ${name}
🏙️ *Localidad:* ${city}
📍 *Dirección:* ${address}
🕒 *Fecha:* ${newOrder.date}

📦 *Productos:*
${cart.map(item => `• ${item.title} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join("\n")}

💰 *Total:* $${newOrder.total}

¡Gracias por tu compra! 🙌
`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5493416863976?text=${encodedMessage}`;

    clearCart();
    window.open(whatsappUrl, "_blank");
    setShowModal(true);
  };

  return (
    <>
      <main className={styles.finishCart}>
        <div className={styles.container}>
          <div className={styles.contactClose}>
            <CloseButton aria-label="Cerrar formulario" onClick={() => navigate("/")} />
          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            className={styles.whatsappLogo}
          />

          <h1>Finalizar Compra</h1>

          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre completo:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={3}
              />
            </div>

            <div>
              <label htmlFor="city">Localidad:</label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Seleccioná una localidad</option>
                <option value="Rosario">Rosario</option>
                <option value="Alvarez">Alvarez</option>
                <option value="Piñero">Piñero</option>
                <option value="Soldini">Soldini</option>
                <option value="Pueblo Muñoz">Pueblo Muñoz</option>
              </select>
            </div>

            <div>
              <label htmlFor="address">Dirección de envío:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                minLength={5}
              />
            </div>

            <div className={styles.checkoutSummary}>
              <p>Total a pagar: <strong>${total.toFixed(2)}</strong></p>
            </div>

            <button type="submit">Confirmar Compra</button>
          </form>
        </div>
      </main>

      <ModalPurchase
        show={showModal}
        onHide={() => {
          setShowModal(false);
          navigate("/");
        }}
      />
    </>
  );
};

export default FinishCart;

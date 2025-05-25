//para ver pedidos (solo admin y superadmin)

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AllOrders.module.css"; // crealo o copiá el de MyOrders
import axios from "axios";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !token) {
      alert("Debés iniciar sesión como administrador.");
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:3000/api/orders/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => {
        console.error("Error al obtener pedidos:", err);
        alert("No estás autorizado para ver esta sección.");
        navigate("/");
      });
  }, [navigate]);

  return (
    <main className={styles.myOrders}>
      <div className={styles.container}>
        <h1>Pedidos de todos los usuarios</h1>

        {orders.length === 0 ? (
          <p>No hay pedidos aún.</p>
        ) : (
          <ul className={styles.ordersList}>
            {orders.map((order, index) => (
              <li key={index} className={styles.orderItem}>
                <h3>🛒 Pedido #{index + 1}</h3>
                <p><strong>Usuario:</strong> {order.name} ({order.email})</p>
                <p><strong>Fecha:</strong> {order.date}</p>
                <p><strong>Localidad:</strong> {order.city}</p>
                <p><strong>Dirección:</strong> {order.address}</p>
                <p><strong>Total:</strong> ${order.total}</p>
                <details>
                  <summary>Ver productos</summary>
                  <ul>
                    {order.items.map((item, i) => (
                      <li key={i}>
                        {item.title} x{item.quantity} - ${item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default AllOrders;

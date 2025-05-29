import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Orders.module.css";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("Debés iniciar sesión para ver tus pedidos.");
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.role !== "admin" && user.role !== "superadmin") {
      alert("No tenés permiso para ver esta sección.");
      navigate("/");
      return;
    }

    // Asumiendo que el token JWT está guardado en localStorage con la clave 'token'
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar pedidos");
        return res.json();
      })
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  return (
    <div className={styles.ordersContainer}>
      <h1>Pedidos de todos los usuarios</h1>

      {orders.length === 0 ? (
        <p>No hay pedidos registrados aún.</p>
      ) : (
        <ul className={styles.orderList}>
          {orders.map((order, index) => (
            <li key={order.id || index} className={styles.orderCard}>
              <h3>Pedido #{order.id || index + 1}</h3>
              <p><strong>Usuario:</strong> {order.email}</p>
              <p><strong>Nombre:</strong> {order.name}</p>
              <p><strong>Localidad:</strong> {order.city}</p>
              <p><strong>Dirección:</strong> {order.address}</p>
              <p><strong>Total:</strong> ${order.total}</p>

              <h4>Productos:</h4>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.title} x{item.quantity} - ${(
                      item.price * item.quantity
                    ).toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;

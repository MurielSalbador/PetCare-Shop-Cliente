import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Orders.module.css"; // opcional: tu archivo de estilos

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("Debés iniciar sesión para ver tus pedidos.");
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    const email = user?.email;
    setUserEmail(email);

    const ordersKey = `orders_${email}`;
    const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    setOrders(storedOrders);
  }, [navigate]);

  return (
    <div className={styles.ordersContainer}>
      <h1>Mis Pedidos</h1>

      {orders.length === 0 ? (
        <p>No tenés pedidos guardados aún.</p>
      ) : (
        <ul className={styles.orderList}>
          {orders.map((order, index) => (
            <li key={index} className={styles.orderCard}>
              <h3>Pedido #{index + 1}</h3>
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

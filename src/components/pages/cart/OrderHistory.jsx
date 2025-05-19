import { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('orders');
    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, []);

  if (orders.length === 0) {
    return (
      <div className="container">
        <h1>Historial de Pedidos</h1>
        <p>No hay pedidos guardados aún.</p>
      </div>
    );
  }

  return (
    <main className="order-history">
      <div className="container">
        <h1>📄 Historial de Pedidos</h1>
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <h2>🧾 Pedido #{index + 1}</h2>
            <p><strong>Nombre:</strong> {order.name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Dirección:</strong> {order.address}</p>
            <p><strong>Fecha:</strong> {order.date}</p>

            <h3>Productos:</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.id + item.title}>
                  {item.title} x{item.quantity} — ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>

            <p><strong>Total:</strong> ${order.total}</p>
            <hr />
          </div>
        ))}
      </div>
    </main>
  );
};

export default OrderHistory;

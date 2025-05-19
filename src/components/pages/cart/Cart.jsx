import { useShallow } from "zustand/shallow";
import { useCart } from "../../../store.js";
import { useFilters } from "../../../hooks/useFilters.js";


export default function Cart() {
  const { count, cart, addCart, removeCart } = useCart(
    useShallow((state) => ({
      count: state.count,
      cart: state.cart,
      addCart: state.addCart,
      removeCart: state.removeCart,
    }))
  );

  const { filterProducts } = useFilters(); // ⬅️ Aplicamos los filtros al carrito
  const filteredCart = filterProducts(cart);

  const totalItems = filteredCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = filteredCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h3 className="cart-title">Cart:</h3>
      <ul className="cart-list">
        {filteredCart.map((item) => (
          <li key={item.id + item.title} className="cart-item">
            <span className="item-name">
              {item.title.length > 20
                ? `${item.title.slice(0, 20)}...`
                : item.title}
            </span>
            <div className="item-controls">
              <button onClick={() => removeCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addCart(item)}>+</button>
            </div>
            <span className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <div>
          <p>Total Items:</p>
          <p>{totalItems}</p>
        </div>
        <div>
          <p>Total Price:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

import Cart from "../cart/Cart.jsx";
import { FiltersProvider } from "../../../context/filters.jsx";
import { Link } from "react-router-dom";
import styles from "./CartHeader.module.css"; // <-- módulo CSS

const CartHeader = () => {
  return (
    <FiltersProvider>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>🛒 Mi Carrito</h1>

          <Cart />

          <div className={styles.classButton}>
            <Link to="/finish">Finalizar tu compra</Link>
            <Link to="/shop">Volver a la tienda</Link>
          </div>
        </div>
      </main>
    </FiltersProvider>
  );
};

export default CartHeader;

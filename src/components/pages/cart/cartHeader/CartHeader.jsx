import Cart from "../Cart/Cart.jsx";
import { FiltersProvider } from "../../../../context/filters.jsx";
import { Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./CartHeader.module.css"; 

const CartHeader = () => {
  const navigate = useNavigate();


  //boton cerrar redirigir home/shop
  const location = useLocation();
  const from =
    location.state?.from || localStorage.getItem("fromPage") || "home";



  return (
    <>
      <FiltersProvider>
        <main className={styles.main}>
          <div className={styles.container}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200">
            <div className={styles.contactClose}>
              <CloseButton
                aria-label="Cerrar formulario"
                onClick={() => navigate(from === "shop" ? "/shop" : "/")}
              />
            </div>
            <h1 className={styles.pageTitle}>🛒 Mi Carrito</h1>
            <div className={styles.containerCart}>
              <Cart />
            </div>
            

            <div className={styles.classButton}>
              <Link to="/finish">Finalizar tu compra</Link>
              <Link to="/shop">Volver a la tienda</Link>
            </div>
          </div>
        </main>
      </FiltersProvider>
    </>
  );
};

export default CartHeader;

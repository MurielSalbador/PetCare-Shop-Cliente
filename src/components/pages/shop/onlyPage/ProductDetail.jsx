import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../../../api/fakeStoreApi.js';


import './ProductDetail.css';

import { useCart } from "../../../../store.js";

//account
import AccountButton from "../../income/account/AccountButton.jsx";

//protected
import { isAdminOrSuperAdmin } from "../../../../utils/auth.js";

export default function ProductDetail() {
  const { id } = useParams();

  

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  });

  const addCart = useCart((state) => state.addCart);

  if (isLoading) return <p>Cargando producto...</p>;
  if (error) return <p>Error al cargar el producto</p>;

  return (
    <>
     <header className="main-header">
        <div className="header-actions">
          <div className="nav-logo">
            <a
              href="/"
              className="logo-text"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="logo-line-1">RubioHnos</div>
              <div className="logo-line-2">mayorista</div>
            </a>
          </div>

          <ul className="nav-center">
            <li>
              <a href="/" className="link">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                <i className="fa-solid fa-envelope"></i> Contactanos
              </a>
            </li>
            <li>
              <a href="/myOrders" className="link">
                <i className="fa-solid fa-envelope"></i> Pedidos
              </a>
            </li>
           {isAdminOrSuperAdmin() && (
            <li>
              <a href="/httpClients" className="link">
                <i className="fa-solid fa-envelope"></i> Clientes
              </a>
            </li>
            )}
          </ul>

          <ul className="nav-right">
            <li>
              <a href="/cart" className="link">
                <i className="fa-solid fa-cart-shopping"></i> Mi carrito
              </a>
            </li>
            <li>
              <div className="link">
                <AccountButton />
              </div>
            </li>
          </ul>
        </div>
      </header>

    <div className="product-detail">
      <img src={product.imageUrl} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p><i className="fas fa-tag"></i> <strong>Marca:</strong> {product.brand}</p>
        <p><i className="fas fa-dollar-sign"></i> <strong>Precio:</strong> ${product.price}</p>
        <p><i className="fas fa-box"></i> <strong>Stock:</strong> {product.stock}</p>
        <p><i className="fas fa-info-circle"></i> <strong>Descripción:</strong> {product.description}</p>

        {product.stock === 1 && <p className="stock-alert">¡Último disponible!</p>}

        <button
          disabled={product.stock === 0}
          onClick={() => addCart(product)}
          className="add-cart-btn"
        >
          {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
        <button>
          <a href="/shop" className="back-to-shop">Volver a la tienda</a>
        </button>
      </div>
    </div>
    </>
  );
}

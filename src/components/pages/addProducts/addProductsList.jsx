import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./AddProducts.jsx";
import "./addProductsList.css"

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error al obtener productos:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    setEditingProductId(id);
  };

  const handleDelete = async (id) => {
  const confirm = window.confirm(
    "¿Estás seguro que querés eliminar este producto?"
  );
  if (!confirm) return;

  try {
    const token = localStorage.getItem("token"); // Asegurate que esté bien guardado tras login

    await axios.delete(`http://localhost:3000/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("✅ Producto eliminado");
    fetchProducts(); // Recarga productos
  } catch (err) {
    console.error("Error al eliminar:", err);
    alert("❌ No se pudo eliminar el producto");
  }
};

  const handleSuccess = () => {
    setEditingProductId(null);
    fetchProducts();
  };

  return (
<div className="container-formAdd">
  <div >
      <ProductForm productId={editingProductId} onSuccess={handleSuccess} />

      <div className="admin-products">
        <h2>Productos Guardados</h2>
        {products.map((product) => (
          <div key={product.id} className="admin-product-card">
            <div className="admin-product-info">
              <h3>{product.title}</h3>
              <p>
                <strong>Marca:</strong> {product.brand}
              </p>
              <p>
                <strong>Precio:</strong> $
                {Number(product.price).toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Disponible:</strong> {product.available ? "Sí" : "No"}
              </p>
              {product.imageUrl && (
                <img src={product.imageUrl} alt={product.title} />
              )}
            </div>

            <div className="admin-product-actions">
              <button onClick={() => handleEdit(product.id)}>✏️ Editar</button>
              <button onClick={() => handleDelete(product.id)}>
                🗑️ Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
     
    
  );
}

export default ProductList;

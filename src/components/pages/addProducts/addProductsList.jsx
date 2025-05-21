import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./AddProducts.jsx";

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
    const confirm = window.confirm("¿Estás seguro que querés eliminar este producto?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
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
    <div>
      <ProductForm productId={editingProductId} onSuccess={handleSuccess} />

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Productos Guardados</h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{product.title}</h3>
              <p><strong>Marca:</strong> {product.brand}</p>
              <p><strong>Precio:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Disponible:</strong> {product.available ? "Sí" : "No"}</p>
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{ width: "100px", marginTop: "10px" }}
                />
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button onClick={() => handleEdit(product.id)}>✏️ Editar</button>
              <button onClick={() => handleDelete(product.id)} style={{ backgroundColor: "#f44336", color: "#fff" }}>
                🗑️ Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

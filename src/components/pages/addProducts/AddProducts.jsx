import { useEffect, useState } from "react";
import axios from "axios";

function ProductForm({ productId, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    stock: "",
    imageUrl: "",
    available: false,
  });

  useEffect(() => {
    if (productId) {
      axios.get(`http://localhost:3000/api/products/${productId}`).then((res) => {
        setFormData(res.data);
      });
    } else {
      setFormData({
        title: "",
        brand: "",
        price: "",
        stock: "",
        imageUrl: "",
        available: false,
      });
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    try {
      if (productId) {
        // actualizar
        await axios.put(`http://localhost:3000/api/products/${productId}`, payload);
        alert("✅ Producto actualizado");
      } else {
        // crear nuevo
        await axios.post("http://localhost:3000/api/products", payload);
        alert("✅ Producto agregado");
      }

      setFormData({
        title: "",
        brand: "",
        price: "",
        stock: "",
        imageUrl: "",
        available: false,
      });

      onSuccess?.();
    } catch (error) {
      console.error(error);
      alert("❌ Error al guardar el producto");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "20px auto" }}>
      <h2>{productId ? "Editar Producto" : "Agregar Producto"}</h2>

      <label>Título:</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Marca:</label>
      <input name="brand" value={formData.brand} onChange={handleChange} required />

      <label>Precio:</label>
      <input name="price" type="number" value={formData.price} onChange={handleChange} required />

      <label>Stock:</label>
      <input name="stock" type="number" value={formData.stock} onChange={handleChange} required />

      <label>URL de imagen:</label>
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

      <label>
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
        />
        Disponible
      </label>

      <button type="submit" style={{ marginTop: "10px" }}>
        {productId ? "Actualizar" : "Guardar"} Producto
      </button>
    </form>
  );
}

export default ProductForm;

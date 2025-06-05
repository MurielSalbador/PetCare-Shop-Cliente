import { useEffect, useState } from "react";
import axios from "axios";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
import "./addProducts.css";

function ProductForm({ productId, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    stock: "",
    imageUrl: "",
    available: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:3000/api/products/${productId}`)
        .then((res) => {
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

    const priceParsed = parseFloat(parseFloat(formData.price).toFixed(2));
    const stockParsed = Number(formData.stock);

    if (isNaN(priceParsed) || priceParsed < 0) {
      alert("Ingrese un precio válido mayor o igual a 0");
      return;
    }

    if (isNaN(stockParsed) || stockParsed < 0) {
      alert("Ingrese un stock válido mayor o igual a 0");
      return;
    }
    const payload = {
      ...formData,
      price: priceParsed,
      stock: stockParsed,
    };

    const token = localStorage.getItem("token"); // Obtener token

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (productId) {
        await axios.put(
          `http://localhost:3000/api/products/${productId}`,
          payload,
          config
        );
        alert("✅ Producto actualizado");
      } else {
        await axios.post("http://localhost:3000/api/products", payload, config);
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
    <div className="container-formAdd"               data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200">
        <button className="back-arrow" onClick={() => navigate("/shop")}>
          <i className="fas fa-arrow-left"></i>
        </button>

      <form className="product-form-container" onSubmit={handleSubmit}>
        <h2>{productId ? "Editar Producto" : "Agregar Producto"}</h2>

        <label>Título:</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Marca:</label>
        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <label>Precio:</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          min="0"
          required
        />

        <label>Stock:</label>
        <input
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />

        <label>URL de imagen:</label>
        <input
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          Disponible
        </label>

        <button type="submit">
          {productId ? "Actualizar" : "Guardar"} Producto
        </button>
      </form>
    </div>
  );
}

export default ProductForm;

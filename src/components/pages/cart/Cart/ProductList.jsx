import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../../api/fakeStoreApi.js";
import { useCart } from "../../../../store.js";
import { useFilters } from "../../../../hooks/useFilters.js";

export default function ProductList() {
  const { filters } = useFilters();

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => getAllProducts(filters),
  });

  const addCart = useCart((state) => state.addCart);
  const filteredProducts = products; // Ya vienen filtrados desde el backend

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error cargando productos</p>;

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="product-img"
          />
          <h3 className="product-title">
            {product.title.length > 20
              ? `${product.title.slice(0, 80)}...`
              : product.title}
          </h3>
          <div className="product-footer">
            <p className="product-price">${product.price}</p>

            {/* mostramos si esta agotado o no */}
            {product.stock === 1 && (
              <p className="stock-alert">¡Último disponible!</p>
            )}
            {product.stock === 0 ? (
              <button disabled>Sin stock</button>
            ) : (
              <button onClick={() => addCart(product)}>
                Agregar al carrito
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


import useProductNavigation from "../../../../hooks/useProductNavigation/useProductNavigation.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProducts } from "../../../../api/fakeStoreApi.js";
import { useCart } from "../../../../store.js";
import { useFilters } from "../../../../hooks/useFilters.js";
import "./ProductList.css";

export default function ProductList() {
  // 👇 todos los hooks al principio
  const { filters } = useFilters();
  const { goToProductDetail } = useProductNavigation();
  const addCart = useCart((state) => state.addCart);
  const queryClient = useQueryClient();

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => getAllProducts(filters),
  });

  // 👇 lógica después
  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error cargando productos</p>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {/* 🔹 Imagen del producto */}
          <img src={product.imageUrl} alt={product.title} />
          <h3 className="product-title">
            {product.title.length > 20
              ? `${product.title.slice(0, 80)}...`
              : product.title}
          </h3>

          <div className="product-footer">
            <p className="product-price">${product.price}</p>

 <p className="product-stock">Stock: {product.stock}</p>

            {product.stock === 1 && (
              <p className="stock-alert">¡Último disponible!</p>
            )}

            <div className="product-buttons">
              {product.stock === 0 ? (
                <button disabled>Sin stock</button>
              ) : (
                <button
                  disabled={product.stock === 0}
                  onClick={() => {
                    if (product.stock === 0) return;
                    addCart(product);

                    queryClient.setQueryData(
                      ["products", filters],
                      (oldProducts) => {
                        return oldProducts.map((p) =>
                          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
                        );
                      }
                    );
                  }}
                >
                  {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
                </button>
              )}

              {/* 🔹 Nuevo botón "Ver más" */}
              <button onClick={() => goToProductDetail(product.id)}>
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

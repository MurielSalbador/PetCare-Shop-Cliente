import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../../api/fakeStoreApi.js";
import { useCart } from "../../../../store.js";
import { useFilters } from "../../../../hooks/useFilters.js";

export default function ProductList() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const addCart = useCart((state) => state.addCart);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-img"
          />
          <h3 className="product-title">
            {product.title.length > 20
              ? `${product.title.slice(0, 80)}`
              : product.title}
          </h3>
          <div className="product-footer">
            <p className="product-price">${product.price}</p>
            <button
              onClick={() => addCart({ ...product, quantity: 1 })}
              className="add-btn"
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

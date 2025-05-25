import { useState, useEffect } from "react";
import { useFilters } from "../../../../hooks/useFilters.js";
import { getBrands } from "../../../../api/brandsApi.js";

export default function Filters() {
  const { filters, setFilters } = useFilters();
  const [brands, setBrands] = useState([]);
  const MAX_PRICE = 20000;

  useEffect(() => {
    getBrands()
      .then(setBrands)
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="filters-box">
      {/* Marca */}
      <label className="filter-label">
        Marca:
        <select
          className="filter-select"
          value={filters.brand || "all"}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, brand: e.target.value }))
          }
        >
          <option value="all">Todas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      {/* Precio mínimo */}
      <label className="filter-label">
        Precio mínimo: ${filters.minPrice}
        <input
          className="filter-slider"
          type="range"
          min="0"
          max={MAX_PRICE}
          step="1"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, minPrice: Number(e.target.value) }))
          }
        />
      </label>

      {/* Ordenar precio */}
      <label className="filter-label">
        Ordenar precio:
        <select
          className="filter-select"
          value={filters.sortByPrice || ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, sortByPrice: e.target.value }))
          }
        >
          <option value="">Sin ordenar</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </label>

      <p className="filter-range-text">
        Mostrando productos entre{" "}
        <strong>${filters.minPrice || 0}</strong> y{" "}
        <strong>${filters.maxPrice || MAX_PRICE}</strong>
      </p>
    </section>
  );
}

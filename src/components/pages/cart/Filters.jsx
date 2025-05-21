import { useFilters } from "../../../hooks/useFilters.js";

export default function Filters() {
  const { filters, setFilters } = useFilters();
  const MAX_PRICE = 100;

  return (
    <section className="filters-box">
      <label className="filter-label">
        Categoría:
        <select
          className="filter-select"
          value={filters.category}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          <option value="all">Todas</option>
          <option value="BARRAS DE CEREAL">BARRAS DE CEREAL</option>
          <option value="GRANOLA">GRANOLA</option>
          <option value="BIENESTAR">BIENESTAR</option>
          <option value="descanso">Descanso</option>
          <option value="higiene">Higiene</option>
        </select>
      </label>

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
            setFilters((prev) => ({
              ...prev,
              minPrice: Number(e.target.value),
            }))
          }
        />
      </label>

      <p className="filter-range-text">
        Mostrando productos entre <strong>${filters.minPrice}</strong> y <strong>${MAX_PRICE}</strong>
      </p>
    </section>
  );
}
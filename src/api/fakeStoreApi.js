// src/api/fakeStoreApi.js

export async function getAllProducts(filters = {}) {
  // Construir query string para filtros
  const query = new URLSearchParams();

  if (filters.brand && filters.brand !== "all") {
    query.append("brand", filters.brand);
  }
  if (filters.category && filters.category !== "all") {
    query.append("category", filters.category);
  }
  if (filters.minPrice) {
    query.append("minPrice", filters.minPrice);
  }

  const url = `http://localhost:3000/api/products?${query.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }
  return response.json();
}

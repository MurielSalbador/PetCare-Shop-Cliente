import "./productsList.css"

function ListOfProducts({ products }) {
  return (
    <ul className='products-container'>
      {products.map(product => (
        <li className='product-card' key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.year}</p>
          <img src={product.image} alt={product.title} />
        </li>
      ))}
    </ul>
  )
}

function NoProductResults() {
  return <p>No se encontraron productos para esta búsqueda</p>
}

export function Products({ products }) {
  const hasProducts = products?.length > 0
  return hasProducts ? <ListOfProducts products={products} /> : <NoProductResults />
}
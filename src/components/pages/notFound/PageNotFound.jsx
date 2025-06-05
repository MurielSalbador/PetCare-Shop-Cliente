import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <section className="page_404">
      <div>
        <div className="four_zero_four_bg">
          <h1>404</h1>
        </div>
        <div className="contant_box_404">
          <h3>Parece que estás perdido</h3>
          <p>¡La página que buscas no está disponible!</p>
          <a href="/" className="link_404">
            Ir a Inicio
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;

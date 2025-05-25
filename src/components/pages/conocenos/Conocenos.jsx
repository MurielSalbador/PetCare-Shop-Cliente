import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
import "./Conocenos.css";

const Conocenos = () => {
 const navigate = useNavigate();

  return (
    <div className="conocenos-container">
      <div className="conocenos-card">
        <div className="contactCloseConocenos">
               <CloseButton aria-label="Cerrar formulario" onClick={() => navigate("/")} />
            </div>
        <h2>RUBIO Hnos</h2>
        <h4>Blog personal</h4>
        <ul>
          <li>🥗 Alimentos saludables y naturales</li>
          <li>🌾 Granel, sin TACC, orgánicos y más</li>
          <li>📍 Piñero</li>
          <li>🚙 Envíos a Rosario y alrededores</li>
          <li>🛒 No dudes en consultar 👇</li>
        </ul>
      </div>
    </div>
  );
};

export default Conocenos;

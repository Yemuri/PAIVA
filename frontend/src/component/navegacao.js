import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../images/PAIVAwhats.png";

export default function Navegacao() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="navbar-logo">
          <i className="fa-solid fa-house"></i> Logo
        </Link>
        <div className="nav-links">
          <span className="nav-item">
            <Link to="/abrigo-idosos">Abrigo para Idosos</Link>
          </span>
          <span className="nav-item">
            <Link to="/casa-da-crianca">Casa da Criança</Link>
          </span>
          <span className="nav-item">
            <Link to="/casa-do-leite">Casa do Leite</Link>
          </span>
          <span className="nav-item">
            <Link to="/login" href="#">
              Administrativo
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

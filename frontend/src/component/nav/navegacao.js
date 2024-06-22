import "./nav.css";

import { RiTeamFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Navegacao() {
  return (
    <div className="navegacao">
      <span className="fundacao"><Link to="/">Fundação Sebastião Paiva</Link></span>
      <span className="item-navegacao"><Link to="/casa-do-leite">Casa do Leite</Link></span>
      <span className="item-navegacao"><Link to="/casa-da-crianca">Casa da Criança</Link></span>
      <span className="item-navegacao"><Link to="/abrigo-para-idosos">Abrigo de Idosos</Link></span>

      <div className="icones-nav">
        <div className="op">
          <Link to="/equipe"><RiTeamFill /> Equipe</Link>
        </div>
        <div className="op">
          <Link to="/prestacao-de-contas"><FaMoneyBillTransfer /> Prestação de Contas</Link>
        </div>
      </div>
    </div>
  );
}

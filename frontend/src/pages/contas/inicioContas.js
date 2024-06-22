import { Link } from "react-router-dom";
import "./contas.css";
import apiLocal from "../../APIs/APILocal";
import { useState, useEffect } from "react";

// ICONES
import { FaFilePdf } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function InicioContas() {
  const [balancete, setBalancete] = useState("");

  useEffect(() => {
    async function loadBalancete() {
      const response = await apiLocal.get("/listar-balancete");
      setBalancete(response.data);
    }
    loadBalancete();
  }, [balancete]);

  return (
    <div>
      <div className="container-contas">
        <div className="title_contas">
          <h2>
            <FaMoneyBillTransfer /> Prestação de Contas
          </h2>

          <div className="itens-conta">
            {balancete.length === 0 ? (
              <h2>Aguardando balancete...</h2>
            ) : (
              <>
                {balancete.map((item) => {
                  return (
                    <ul>
                      <h2>{item.nome}</h2>
                      <Link to={`http://localhost:3333/files/${item.banner}`}>
                        <FaFilePdf color="black" size="50" />
                      </Link>
                      <h3 style={{ textAlign: "justify" }}>{item.ano}</h3>
                      <br /> <br /> <br />
                    </ul>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

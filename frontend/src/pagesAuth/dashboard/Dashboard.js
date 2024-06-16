import { useState } from "react";
import "./dashboard.css";
import Modal from "react-modal";

export default function Dashboard() {
  const [modalAberto, setModalAberto] = useState(false);

  function abrirModalIdoso() {
    setModalAberto(true);
  }
  function abrirModalCrianca() {
    setModalAberto(true);
  }
  function abrirModalLeite() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  return (
    <div className="contGeral-dashboard">
      <h1>Dashboard</h1>
      <h2 style={{ margin: "2%" }}>Adicionar evento:</h2>
      <div className="container-categorias">
        <a onClick={abrirModalIdoso}>
          <h3>Abrigo de idosos</h3>
        </a>
        <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
          <form>
            <h2>Criar evento - Abrigo de idosos</h2>
          </form>
        </Modal>
        <a onClick={abrirModalCrianca}>
          <h3>Casa da criança</h3>
        </a>
        <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
          <form>
            <h2>Criar evento - Casa da criança</h2>
          </form>
        </Modal>
      </div>
    </div>
  );
}

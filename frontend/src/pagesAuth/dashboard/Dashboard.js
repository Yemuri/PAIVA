import { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import Modal from "react-modal";
import apiLocal from "../../APIs/APILocal";
import { AuthContext } from "../../Context";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [nome, setNome] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  const [token, setToken] = useState("");

  const { VerifyToken } = useContext(AuthContext);

  useEffect(() => {
    VerifyToken();
    const lsToken = localStorage.getItem("@LoginPaiva");
    const stToken = JSON.parse(lsToken);
    const bearer = stToken.token;
    setToken(bearer);
  }, []);

  function handleImagemIdoso(e) {
    if (!e.target.files) {
      return;
    }
    const image = e.target.files[0];
    if (
      image.type === "image/png" ||
      image.type === "image/jpeg" ||
      image.type === "image/jpg"
    ) {
      setImagem(image);
    }
  }

  async function handleCadastrar(e) {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("nome", nome);
      data.append("data", dataEvento);
      data.append("descricao", descricao);
      data.append("file", imagem);
      const response = await apiLocal.post("/criar-evento", data, {
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      });
      console.log(response);
      toast.success(response.data.dados);
      fecharModal();
    } catch (err) {
      toast.error("Erro");
    }
    setNome("");
    setDescricao("");
    setDataEvento("");
    setImagem(null);
  }

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
      <div className="container-categoria-modal">
        <button onClick={abrirModalIdoso}>
          <h3>Abrigo de idosos</h3>
        </button>
        <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
          <form onSubmit={handleCadastrar}>
            <h2>Criar evento - Abrigo de idosos</h2>
            <div className="container-eventos">
              <label>
                <p>Nome:</p>
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <label>
                <p>Descrição:</p>
              </label>
              <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <label>
                <p>Data:</p>
              </label>
              <input
                type="datetime-local"
                value={dataEvento}
                onChange={(e) => setDataEvento(e.target.value)}
              />
              <label>
                <p>Imagem:</p>
              </label>
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleImagemIdoso}
              />
              <button>Cadastrar evento</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

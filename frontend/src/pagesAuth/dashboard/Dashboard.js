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
  const [categoria, setCategoria] = useState('')
  const [idCategoria, setIdCategoria] = useState('')

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

  useEffect(() => {
    async function loadCategorias() {
      const resposta = await apiLocal.get('/listar-eventos', {
        headers: {
          Authorization: 'Bearer ' + `${token}`
        }
      })
      setCategoria(resposta.data)
      console.log(resposta.data)
    }
    loadCategorias()
  }, [])

  async function handleCadastrar(e) {
    try {
      e.preventDefault();
      const categoriaId = idCategoria
      const data = new FormData();
      data.append("nome", nome);
      data.append("data", dataEvento);
      data.append("descricao", descricao);
      data.append('categoriaId', categoriaId)
      data.append("file", imagem);
      const response = await apiLocal.post("/criar-evento", data, {
      });
      toast.success(response.data.dados);
      fecharModal();
    } catch (err) {
      toast.error("Erro");
      console.log(err)
    }
    setNome("");
    setDescricao("");
    setDataEvento("");
    setImagem(null);
    
  }

  const [modalAberto, setModalAberto] = useState(false);

  function abrirModal() {
    setModalAberto(true);
  }


  function fecharModal() {
    setModalAberto(false);
  }

  return (
    <div className="contGeral-dashboard">
      <h1>Dashboard</h1>
      <div className="container-categoria-modal">
        <button onClick={abrirModal} style={{ margin: "2%" }}>
          <h3>Criar Evento</h3>
        </button>
        <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
          <form onSubmit={handleCadastrar}>
            <h2>Criar evento - Abrigo de idosos</h2>
            <div className="container-eventos">


              <select value={idCategoria}
                onChange={(e) => setIdCategoria(e.target.value)}
              >
                <option >Selecione o evento:</option>

{categoria.map((item) =>{
  return(
    <option
    value={item.id}>
      {item.nome}
    </option>
  )
})}

              </select>

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
                type="date"
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

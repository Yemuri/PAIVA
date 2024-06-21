import { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import Modal from "react-modal";
import apiLocal from "../../APIs/APILocal";
import { AuthContext } from "../../Context";
import { toast } from "react-toastify";

{
  /*

 Eae Yemuri, blz? Então cara, ajustei aquele problema com as categorias
 Você estava tentando puxar as categorias da tabela "eventos" e não "eventos-categorias"
 Criei um controller e services para fazer a chamada delas e fiz o começinho de um Get de eventos

  Segue abaixo as novas rotas, espero não atrapalhar muito 😻
 👇👇👇👇👇

 "/listar-categorias-eventos" => listar categorias dos eventos
 "/listar-eventos" => listar eventos em si

 obs: ta ficando bem bonito o layout, parabens ao envolvidos!!!

 obs²: Desculpa meu sumiço do projeto, estava re-organizando minha vida e me desculpa pelos
       Tremendos atrasos na minha participação, qualquer coisa me enviem mensagem e desculpa
       Novamente. Espero não ter atrasado tanto o projeto...
*/
}

export default function Dashboard() {
  const [nome, setNome] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [idCategoria, setIdCategoria] = useState("");

  const [eventos, setEventos] = useState("");
  const [balancete, setBalancete] = useState("");

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
      const resposta = await apiLocal.get("/listar-categorias-evento", {
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      });
      setCategoria(resposta.data);
      // console.log(resposta.data);
    }
    loadCategorias();
  }, []);

  async function handleCadastrar(e) {
    try {
      e.preventDefault();
      const categoriaId = idCategoria;
      const data = new FormData();
      data.append("nome", nome);
      data.append("data", dataEvento);
      data.append("descricao", descricao);
      data.append("categoriaId", categoriaId);
      data.append("file", imagem);
      const response = await apiLocal.post("/criar-evento", data, {});
      toast.success(response.data.dados);
      fecharModal();
    } catch (err) {
      toast.error("Erro");
      console.log(err);
    }
    setNome("");
    setDescricao("");
    setDataEvento("");
    setImagem(null);
  }

  useEffect(() => {
    async function loadEventos() {
      const response = await apiLocal.get("/listar-eventos");
      setEventos(response.data);
    }
    loadEventos();
  }, [eventos]);

  useEffect(() => {
    async function loadBalancete() {
      const response = await apiLocal.get("/listar-balancete")
      setBalancete(response)
      console.log(response.data)
    }
    loadBalancete()
  }, [balancete])

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
              <select
                value={idCategoria}
                onChange={(e) => setIdCategoria(e.target.value)}
              >
                <option>Selecione o evento:</option>
                {categoria.length === 0 ? (
                  <h2>Aguardando Categorias</h2>
                ) : (
                  <>
                    {categoria.map((item) => {
                      return (
                        <option value={item.id}>{item.nome_categoria}</option>
                      );
                    })}
                  </>
                )}
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
      <br /> <br /> <br />
      <div>
        <h1>Mostrar eventos</h1>
        {eventos.length === 0 ? (
          <h2>Aguardando eventos</h2>
        ) : (
          <>
            {eventos.map((item) => {
              return (
                <ul value={item.id}>
                  <h2>{item.nome}</h2>
                  <li>Data: {item.data}</li>
                  <li>descricao: {item.descricao}</li>
                  <article>
                    <img
                      src={`http://localhost:3333/files/${item.banner}`}
                      alt={item.nome}
                    />
                  </article>
                </ul>
              );
            })}
          </>
        )}
      </div>
      <div>
        <h1>Mostrar balancete</h1>
        {balancete.length === 0 ? (
          <h2>Aguardando balancete</h2>
        ) : (
          <>
            {balancete.map((item) => {
              return (
                <ul value={item.id}>
                  <h2>Nome: {item.nome}</h2>
                  <li>Ano: {item.ano}</li>
                  <article>
                    <img
                      src={`http://localhost:3333/files/${item.banner}`}
                      alt={item.nome}
                    />
                  </article>
                </ul>
              )
            })}
          </>
        )}
      </div>
    </div>
  );
}

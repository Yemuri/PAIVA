import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context";
import { toast } from "react-toastify";

//agora que percebi, o que a Camila programou tem sempre ";" no final.... maluca

//Erro na hora de usar Post, error 400

import "./conta.css";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { GiBangingGavel, GiArmorPunch } from "react-icons/gi";
import apiLocal from "../../APIs/APILocal";

export default function PrestacaoConta() {
  const navigation = useNavigate();

  const { VerifyToken } = useContext(AuthContext);

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setBanner] = useState("");

  const [token, setToken] = useState("");

  useEffect(() => {
    VerifyToken();
    const lsToken = localStorage.getItem("@LoginPaiva");
    const stToken = JSON.parse(lsToken);
    const bearer = stToken.token;
    setToken(bearer);
  }, []);

  async function handleConta(e) {
    e.preventDefault(e);
    try {
      const data = new FormData();

      data.append("nome", nome);
      data.append("data", data);
      data.append("descricao", desc);
      data.append("file", file);

      const response = await apiLocal.post("/criar-balancete", data, {
        headers: {
          Authorization: "Bearer " + `${token}`,
        },
      });

      toast.success(response.data.dados);
    } catch (err) {
      toast.error(err);
      return;
    }
  }

  async function handlePdf(e) {
    if (!e.target.files) {
      alert("Arquivo faltando");
      return;
    }

    console.log(e.target.files[0]);
    const pdf = e.target.files[0];
    if (pdf.type === "pdf/.pdf/word/.word") {
      setBanner(pdf);
    }
  }

  return (
    <div className="bodyLogin">
      <main class="main_login">
        <div className="square_login">
          <div className="content-square_login">
            <div className="title_login">
              <h2>Conta</h2>
            </div>
            <div className="input-group_login">
              <form onSubmit={handleConta}>
                <div className="input_login">
                  <span className="circle">
                    <i className="fa-solid- fa-user">
                      <CiUser />
                    </i>
                  </span>
                  <input
                    type="text"
                    placeholder="nome"
                    className="input-texto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="input_login">
                  <input
                    type="password"
                    placeholder="data"
                    className="input-texto"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <span className="circle">
                    <i className="fa-solid fa-lock">
                      <IoLockClosedOutline />
                    </i>
                  </span>
                </div>
                <div className="input_login">
                  <span className="circle">
                    <i className="fa-solid fa-lock">
                      <GiArmorPunch />
                    </i>
                  </span>
                  <input
                    type="date"
                    placeholder="desc"
                    className="input-texto"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </div>
                <div className="input_login">
                  <input
                    type="file"
                    accept="pdf/.pdf/word/.word"
                    placeholder="banner"
                    className="input-texto"
                    value={file}
                    onChange={handlePdf}
                  />
                  <span className="circle">
                    <i className="fa-solid fa-lock">
                      <GiBangingGavel />
                    </i>
                  </span>
                </div>
                <div className="input_login">
                  <button type="submit">Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

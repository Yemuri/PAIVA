import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context";
import { toast } from "react-toastify";

import "./login.css";

// ICONES
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Login() {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { sighIn, VerifyToken } = useContext(AuthContext);

  useEffect(() => {
    VerifyToken();
  }, []);

  async function handleLogin(e) {
    e.preventDefault(e);

    if (!email || !senha) {
      toast.error("Campos não preenchidos!", {
        toastId: "toastId",
      });
      return;
    }

    try {
      const response = await sighIn(email, senha);

      const username = response.data.nome;
      toast.success(`Bem vindo, ${username}!`);
      navigation("/dashboard");
    } catch (err) {
      toast.warning("Email ou senha incorreto(s)!", {
        toastId: "toastId",
      });
      return;
    }
  }

  return (
    <div className="bodyLogin">
      <main class="main_login">
        <div className="square_login">
          <div className="content-square_login">
            <div className="title_login">
              <h2>Login</h2>
            </div>
            <div className="input-group_login">
              <form onSubmit={handleLogin}>
                <div className="input_login">
                  <span className="circle">
                    <i className="fa-solid- fa-user">
                      <CiUser />
                    </i>
                  </span>
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="input-texto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input_login">
                  <input
                    type="password"
                    placeholder="Senha"
                    className="input-texto"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <span className="circle">
                    <i className="fa-solid fa-lock">
                      <IoLockClosedOutline />
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

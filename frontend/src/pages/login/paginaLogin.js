import "./login.css";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Login() {
  return (
    <div className="bodyLogin">
      <main class="main">
        <div className="square">
          <div className="content-square">
            <div className="title-login">
              <h2>Login</h2>
            </div>
            c:\Users\yemur\OneDrive\Área de Trabalho\PAIVAwhats.png
            <div className="input-group">
              <form>
                <div className="input">
                  <span className="circle">
                    <i className="fa-solid- fa-user">
                      <CiUser />
                    </i>
                  </span>
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="input-texto"
                  />
                </div>
                <div className="input">
                  <input
                    type="password"
                    placeholder="Senha"
                    className="input-texto"
                  />
                  <span className="circle">
                    <i className="fa-solid fa-lock">
                      <IoLockClosedOutline />
                    </i>
                  </span>
                </div>
                <div className="input">
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

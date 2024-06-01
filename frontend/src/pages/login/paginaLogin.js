import "./login.css";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Login() {
  return (
    <div className="bodyLogin">
      <main class="main_login">
        <div className="square_login">
          <div className="content-square_login">
            <div className="title_login">
              <h2>Login</h2>
            </div>
            {/* c:\Users\yemur\OneDrive\Área de Trabalho\PAIVAwhats.png */}
            <div className="input-group_login">
              <form>
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
                  />
                </div>
                <div className="input_login">
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
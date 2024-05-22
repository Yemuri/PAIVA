import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context"

import Inicial from "./home/inicial";
import Login from "./login/paginaLogin";
import InicioLeite from "./leite/inicio/inicioLeite";
import Navegacao from "../component/nav/navegacao";
import InicioCrianca from "./crianca/inicioCrianca";
import Idoso from "./idoso/inicioIdoso";
import Footer from "../component/footer/footer";
import InicioEquipe from "./equipe/inicioEquipe";
import PrestacaoConta from "./prestacao_conta/paginaConta";

import InicialAuth from "../pagesAuth/homeAuth/inicial"

export default function Rotas() {

  const { authentication } = useContext(AuthContext)

  return (

    authentication === false ?

      < div >
        <BrowserRouter>
          <Navegacao />
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/" element={<Inicial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/casa-do-leite" element={<InicioLeite />} />
            <Route path="/casa-da-crianca" element={<InicioCrianca />} />
            <Route path="/abrigo-idosos" element={<Idoso />} />
            <Route path="/equipe" element={<InicioEquipe />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div >

      :

      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route path="/" element={<InicialAuth />} />
          <Route path="*" element={<InicialAuth />} />
          <Route path="/prestacaoconta" element={<PrestacaoConta />} />
        </Routes>
      </BrowserRouter>

  );
}

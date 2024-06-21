import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context";

import Inicial from "./home/inicial";
import Login from "./login/paginaLogin";
import InicioLeite from "./leite/inicio/inicioLeite";
import Navegacao from "../component/nav/navegacao";
import InicioCrianca from "./crianca/inicioCrianca";
import InicioIdoso from "./idoso/inicioIdoso";
import InicioEquipe from "./equipe/inicioEquipe";
import Footer from "../component/footer/footer";
import InicioContas from "./contas/inicioContas";

import InicialAuth from "../pagesAuth/homeAuth/inicial";
import Dashboard from "../pagesAuth/dashboard/Dashboard";
import CrudEvento from "./crud-evento/crud";
import PrestacaoConta from "./prestacao_conta/paginaConta";

export default function Rotas() {
  const { authentication } = useContext(AuthContext);

  return authentication === false ? (
    <div>
      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Inicial />} />
          <Route path="/casa-do-leite" element={<InicioLeite />} />
          <Route path="/casa-da-crianca" element={<InicioCrianca />} />
          <Route path="/abrigo-para-idosos" element={<InicioIdoso />} />
          <Route path="/equipe" element={<InicioEquipe />} />
          <Route path="/prestacao-de-contas" element={<InicioContas />} />
          <Route path="/crud" element={<CrudEvento />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  ) : (
    <BrowserRouter>
      <Navegacao />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<InicialAuth />} />
        <Route path="*" element={<InicialAuth />} />
        <Route path="/prestacaoconta" element={<PrestacaoConta />} />
      </Routes>
    </BrowserRouter>
  );
}

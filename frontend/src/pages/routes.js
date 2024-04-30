import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "./home/inicial";
import Login from "./login/paginaLogin";
import InicioLeite from "./leite/inicio/inicioLeite";
import Navegacao from "../component/navegacao";
import InicioCrianca from "./crianca/inicioCrianca";
import Idoso from "./idoso/inicioIdoso";
import Footer from "../component/footer/footer";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/casa-do-leite" element={<InicioLeite />} />
          <Route path="/casa-da-crianca" element={<InicioCrianca />} />
          <Route path="/abrigo-idosos" element={<Idoso />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

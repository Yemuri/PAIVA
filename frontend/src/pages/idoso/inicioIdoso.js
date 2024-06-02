import "./inicioIdoso.css";
import CarrosselIdoso from "./carrosselidoso";

import logoIdoso from "../../images/logo-idosos-2.png";
import Mapa from "./mapa";
export default function Idoso() {
  return (
    <div className="cont-geral-idoso">
      
      <div className="container-geral-1">
        <img src={logoIdoso} alt="" />
        <p>
          Fundada na cidade de Bauru/SP pelo Sr. Sebastião Paiva, em 01 de
          janeiro de 1946, por tempo indeterminado, sem fins lucrativos é uma
          entidade privada, filantrópica, devidamente registrada sob o nº 65 ás
          folhas, do livro A-1 do Cartório de Registro Civil das Pessoas
          Jurídicas, da 1ª Circunscrição da Comarca de Bauru, cujas atividades
          passam a ser regidas pelo presente Estatuto. É uma entidade que
          integra a Rede de Proteção Social de alta complexidade da Política
          Nacional de Assistência Social, através do atendimento integral em
          regime de abrigo à pessoa idosa, sem vínculos familiares ou, com
          vínculos rompidos, bem como para aquelas que tenham seus direitos
          ameaçados e/ou violados. Através de equipe multidisciplinar, busca
          estabelecer um atendimento de qualidade à pessoas com idade igual ou
          superior a 60 (sessenta) anos, consideradas idosas de acordo com o
          artigo 2º da Lei 8.842, de 04 de Janeiro de 1994 (Política Nacional do
          Idoso).
        </p>
      </div>
      <CarrosselIdoso /> 
      <div className="container-geral-2">
        <Mapa />
      </div>
    </div>
  );
}

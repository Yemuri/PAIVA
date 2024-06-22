import "./inicioIdoso.css";
import CarrosselIdoso from "./carrosselidoso";
import Mapa from "./mapa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiLocal from "../../APIs/APILocal";
import { AuthContext } from "../../Context";
// IMAGENS
import LogoIdoso from "../../images/logo-idosos.png";
import Teste from "../../images/PAIVAwhats.png";

// ICONES
import { FaCalendarCheck } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function InicioIdoso() {
  const [eventos, setEventos] = useState("");
  const categoriaAtual = "43dcea80-21ed-4c97-a9ac-0c2f928d3d0b";

  useEffect(() => {
    async function loadEventos() {
      const response = await apiLocal.get("/listar-eventos");
      setEventos(
        response.data.filter((item) => item.categoriaId === categoriaAtual)
      );
    }
    loadEventos();
  }, [eventos]);

  return (
    <div className="cont-geral-idoso">
      <div className="container-geral-1">
        <img src={LogoIdoso} alt="" />
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
      <section className="eventos">
        {eventos.length === 0 ? (
          <>
            <div className="evento-crianca">
              <div className="img-evento-crianca">
                <img src={Teste} />
              </div>
              <div className="descricao-evento-crianca">
                <div className="infos-crianca">
                  <p>
                    <FaCalendarCheck /> 27 de junho de 2024
                  </p>
                  <p>
                    <FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei
                  </p>
                </div>
                <h2>Cursos de Literatura</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis
                  tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus,
                  urna ac vulputate pulvinar, lacus est suscipit neque, at
                  commodo lacus nisl quis enim. Proin pharetra lobortis sem eu
                  rutrum.
                </p>
              </div>
            </div>
            <div className="evento-crianca">
              <div className="img-evento-crianca">
                <img src={Teste} />
              </div>
              <div className="descricao-evento-crianca">
                <div className="infos-crianca">
                  <p>
                    <FaCalendarCheck /> 27 de junho de 2024
                  </p>
                  <p>
                    <FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei
                  </p>
                </div>
                <h2>Cursos de Literatura</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis
                  tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus,
                  urna ac vulputate pulvinar, lacus est suscipit neque, at
                  commodo lacus nisl quis enim. Proin pharetra lobortis sem eu
                  rutrum.
                </p>
              </div>
            </div>
            <div className="evento-crianca">
              <div className="img-evento-crianca">
                <img src={Teste} />
              </div>
              <div className="descricao-evento-crianca">
                <div className="infos-crianca">
                  <p>
                    <FaCalendarCheck /> 27 de junho de 2024
                  </p>
                  <p>
                    <FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei
                  </p>
                </div>
                <h2>Cursos de Literatura</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis
                  tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus,
                  urna ac vulputate pulvinar, lacus est suscipit neque, at
                  commodo lacus nisl quis enim. Proin pharetra lobortis sem eu
                  rutrum.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            {eventos.map((item) => {
              return (
                <div className="evento-crianca" style={{ width: "22vw" }}>
                  <div className="img-evento-crianca">
                    <img src={`http://localhost:3333/files/${item.banner}`} />
                  </div>
                  <div className="descricao-evento-crianca">
                    <div className="infos-crianca">
                      <p>
                        <FaCalendarCheck /> {item.data}
                      </p>
                    </div>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
      <div className="carrossel-maps">
        <Mapa />
        <CarrosselIdoso />
      </div>
    </div>
  );
}

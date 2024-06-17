import "./inicioIdoso.css";
import CarrosselIdoso from "./carrosselidoso"
import Mapa from "./mapa"

// IMAGENS
import Teste from "../../images/PAIVAwhats.png"

// ICONES
import { FaCalendarCheck } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function InicioIdoso() {
  return (
    <div className="cont-geral-idoso">
      <section className="eventos">
        <div className="evento">
          <div className="img-evento">
            <img src={Teste}/>
          </div>
          <div className="descricao-evento">
            <div className="infos">
              <p><FaCalendarCheck /> 27 de junho de 2024</p>
              <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
            </div>
            <h2>Cursos de Literatura</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
          </div> 
        </div>

        <div className="evento">
          <div className="img-evento">
            <img src={Teste}/>
          </div>
          <div className="descricao-evento">
            <div className="infos">
              <p><FaCalendarCheck /> 27 de junho de 2024</p>
              <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
            </div>
            <h2>Cursos de Literatura</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
          </div> 
        </div>

        <div className="evento">
          <div className="img-evento">
            <img src={Teste}/>
          </div>
          <div className="descricao-evento">
            <div className="infos">
              <p><FaCalendarCheck /> 27 de junho de 2024</p>
              <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
            </div>
            <h2>Cursos de Literatura</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
          </div> 
        </div>
      </section>

      <div className="carrossel-maps">
        <Mapa />
        <CarrosselIdoso /> 
      </div>
    </div>
  );
}
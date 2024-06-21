import "./leite.css"

// IMAGENS
import LogoLeite from "../../../images/logo-leite - Copia.png"
import Croche from "../../../images/croche.jpg"
import Study from "../../../images/study.jpg"
import Books from "../../../images/books.jpg"
import Foto1 from "../../../images/foto1-leite.png"
import Foto2 from "../../../images/foto2-leite.jpg"

// ICONES
import { FaCirclePlus, FaComputer } from "react-icons/fa6";
import { BiBulb } from "react-icons/bi";
import { FaMapMarkerAlt, FaCalendarCheck }  from "react-icons/fa";
import { LuLampDesk } from "react-icons/lu";
import { MdOutlineCleaningServices, MdBabyChangingStation } from "react-icons/md";
import { GiLipstick, GiPencilBrush, GiSlicedBread } from "react-icons/gi";



export default function InicioLeite() {
  return (
    <div className="geral">

      <div className="logo-leite">
        <img src={LogoLeite} alt="Logo casa do Leite" />
        <h1>Bem-vindo à Casa do Leite!</h1>
      </div>

      <section className="caixinhas-leite">
        <div className="evento-leite laranja">
          <div className="img-evento-leite">
            <img src={Books} alt="Foto ilustrativa" />
          </div>
          <div className="descricao-evento-leite">
            <div className="infos-leite">
              <p><FaCalendarCheck /> 27 de junho de 2024</p>
              <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
            </div>
            <h2>Cursos de Literatura</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
          </div> 
        </div>
        <div className="evento-leite roxo">
          <div className="img-evento-leite">
            <img src={Books}/>
          </div>
          <div className="descricao-evento-leite">
            <div className="infos-leite">
              <p><FaCalendarCheck /> 27 de junho de 2024</p>
              <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
            </div>
            <h2>Cursos de Literatura</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
          </div> 
        </div>
        <div className="evento-leite rosa">
          <div className="img-evento-leite">
            <img src={Books}/>
          </div>
          <div className="descricao-evento-leite">
            <div className="infos-leite">
              <p><FaCalendarCheck /> 27 de junho de 2024</p>
              <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
            </div>
            <h2>Cursos de Literatura</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
          </div> 
        </div>

        <div className="caixa branco" id="text">
          <div id="icon-text">
            <FaCirclePlus />
          </div>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. Iniciou suas atividades em julho de 2007 com o Programa de Atendimento à Família, realizando visitas domiciliares e estudos socioeconômicos nas famílias atendidas através da doação de gêneros alimentícios. Em agosto de 2007, a fundação começou a formar grupos temáticos, inicialmente com duas turmas. Cada grupo tem duração de três meses, podendo ser prorrogado por mais três meses, se necessário.</p>
        </div>

        <div className="caixa" id="img">
          <img src={Foto1} alt="foto ilustrativa" />
        </div>
        
        <div className="caixa" id="img">
          <img src={Foto2} alt="foto ilustrativa" />
        </div>

        <div className="caixa branco" id="text">
          <div id="icon-text">
            <BiBulb />
          </div>
          <p>Atualmente, a fundação atende 50 famílias e 70 crianças com doações de alimentos, visando inseri-las no mercado de trabalho. Para isso, desenvolveu um projeto de Geração de Renda e Oportunidade de Trabalho, localizado na Casa do Leite, na Rua Arnaldo Rodrigues de Menezes, 15-91, Pq. Jaraguá. O projeto oferece Cursos Livres, Oficinas de Geração de Renda e orientações para gestantes.</p>
        </div>

        <div className="caixa laranja" id="cursos">
          <div id="icon-cursos">
            <LuLampDesk />
          </div>
          <h4>Curso de Recepconista</h4>
          <p>O curso livre de Recepcionista oferece treinamento prático em se comunicar com eficiência, empatia e respeito ao publico. Aborda técnicas de recepção, agendamento e organização de ambientes corporativos.</p>
        </div>
        <div className="caixa roxinho" id="cursos">
          <div id="icon-cursos">
            <FaComputer />
          </div>
          <h4>Curso de Informática</h4>
          <p>O curso de Informática oferece uma introdução aos fundamentos da informática e ao mundo da tecnologia. Abrange conceitos básicos de hardware e software. Ideal para iniciantes que desejam desenvolver tais habilidades.</p>
        </div>
        <div className="caixa verde" id="cursos">
          <div id="icon-cursos">
            <MdOutlineCleaningServices />
          </div>
          <h4>Confecção de Produtos de Limpeza</h4>
          <p>Aprenda a confeccionar e fabricar produtos para desinfetar e limpar. Foca em técnicas de produção caseira com segurança. Ideal para quem busca empreender e aumentar a renda familiar.</p>
        </div>
        <div className="caixa rosa" id="cursos">
          <div id="icon-cursos">
            <GiLipstick />
          </div>
          <h4>Confecção de Cosméticos de Beleza</h4>
          <p>Domine a criação de produtos para cabelo, unha, corpo e rosto. Abrange formulação, ingredientes e técnicas de produção. Ideal para quem deseja empreender no setor de cosméticos e beleza.</p>
        </div>
        <div className="caixa vermelho" id="cursos">
          <div id="icon-cursos">
            <MdBabyChangingStation />
          </div>
          <h4>Orientações às Gestantes</h4>
          <p>Orientações às Gestantes aborda parto normal, cesárea e doenças sexualmente transmissíveis, com palestras de especialistas. Ideal para futuras mães que buscam informações seguras.</p>
        </div>
        <div className="caixa azul" id="cursos">
          <div id="icon-cursos">
            <GiPencilBrush />
          </div>
          <h4>Oficina de Artesanato</h4>
          <p>Desenvolva a arte do Crochê, Chinelos Bordados, Bonecos de Feltro e arte com materiais recicláveis. Produtos ecologicamente corretos, visando a sustentabilidade e a geração de renda extra.
          </p>
        </div>
        <div className="caixa amarelo" id="cursos">
          <div id="icon-cursos">
            <GiSlicedBread />
          </div>
          <h4>Oficina de Culinária</h4>
          <p>A oficina de Culinária oferece treinamento prático em panificação, preparo de salgados e confeitaria de bolos. Ideal para quem deseja aprimorar suas habilidades culinárias e explorar novas oportunidades na gastronomia.</p>
        </div>

        <div className="caixa branco" id="text">
          <div id="icon-text">
            <FaCirclePlus />
          </div>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. Iniciou suas atividades em julho de 2007 com o Programa de Atendimento à Família, realizando visitas domiciliares e estudos socioeconômicos nas famílias atendidas através da doação de gêneros alimentícios. Em agosto de 2007, a fundação começou a formar grupos temáticos, inicialmente com duas turmas. Cada grupo tem duração de três meses, podendo ser prorrogado por mais três meses, se necessário.</p>
        </div>

        <div className="caixa" id="img">
          <img src={Croche} />
        </div>
      </section>
    </div>
  );
}
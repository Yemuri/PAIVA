import "./leite.css"

// IMAGENS
import LogoLeite from "../../../images/logo-leite.png"
import Croche from "../../../images/croche.jpg"
import Study from "../../../images/study.jpg"
import Books from "../../../images/books.jpg"


// ICONES
import { FaCirclePlus } from "react-icons/fa6";
import { BiBulb } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";

// mudar depois de acordo com os cursos oferecidos
import { LuLampDesk } from "react-icons/lu";
import { BiBasket } from "react-icons/bi";
import { BiBlanket } from "react-icons/bi";
import { BiBrush } from "react-icons/bi";

export default function InicioLeite() {
  return (
    <div className="geral">

      <div className="logo">
        <img src={LogoLeite} alt="Logo casa do Leite" />
        <h1>Bem-vindo à Casa do Leite!</h1>
      </div>

      <section className="caixinhas">
        <div className="evento laranja">
          <div className="img-evento">
            <img src={Books}/>
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
        <div className="evento roxo">
          <div className="img-evento">
            <img src={Books}/>
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
        <div className="evento rosa">
          <div className="img-evento">
            <img src={Books}/>
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
        <div className="evento verde">
          <div className="img-evento">
            <img src={Books}/>
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

        <div className="caixa branco" id="text">
          <div id="icon-text">
            <FaCirclePlus />
          </div>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. Iniciou suas atividades em julho de 2007 com o Programa de Atendimento à Família, realizando visitas domiciliares e estudos socioeconômicos nas famílias atendidas através da doação de gêneros alimentícios. Em agosto de 2007, a fundação começou a formar grupos temáticos, inicialmente com duas turmas. Cada grupo tem duração de três meses, podendo ser prorrogado por mais três meses, se necessário.</p>
        </div>

        <div className="caixa" id="img">
          <img src={Study} />
        </div>
        
        <div className="caixa" id="img">
          <img src={Croche} />
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
          <h4>Curso de Crochê</h4>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. </p>
        </div>
        <div className="caixa roxinho" id="cursos">
          <div id="icon-cursos">
            <BiBasket />
          </div>
          <h4>Curso de Cálculo</h4>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
        </div>
        <div className="caixa verde" id="cursos">
          <div id="icon-cursos">
            <BiBlanket />
          </div>
          <h4>Curso de Lógica</h4>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
        </div>
        <div className="caixa rosa" id="cursos">
          <div id="icon-cursos">
            <BiBrush />
          </div>
          <h4>Curso de Pintura</h4>
          <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
        </div>
      </section>
    </div>
  );
}
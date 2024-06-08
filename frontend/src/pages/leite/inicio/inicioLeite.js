import "./leite.css"
import LogoLeite from "../../../images/logo_casa_do_leite-removebg-preview.png"
import Croche from "../../../images/croche.jpg"
import { FaCirclePlus } from "react-icons/fa6";

export default function InicioLeite() {
  return (
    <div className="geral">
      <div className="logo">
        <img src={LogoLeite} alt="Logo casa do Leite" />
        <h1>Bem-vindo à Casa do Leite!</h1>
      </div>
      <section className="caixinhas">
      
      <div className="caixateste" id="rosa">
        <div className="icon-leite">
          <FaCirclePlus />
        </div>
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. </p>
      </div>
      <div className="caixa" id="roxo">
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. </p>
      </div>
      <div className="caixa" id="laranja">
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. </p>
      </div>
      <div className="caixaimg">
        <img src={Croche} />
      </div>
      <div className="caixa" id="amarelo">
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
      </div>
      <div className="caixa" id="azul">
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
      </div>
      <div className="caixa" id="verde">
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
      </div>
      <div className="caixa" id="roxinho">
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social.</p>
      </div>

      <div className="caixinha2">
        <FaCirclePlus />
        <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. </p>
      </div>


      <p>Fundação Espírita “Sebastião Paiva” é uma entidade filantrópica sem fins lucrativos que faz parte da rede de Proteção Social da Política Nacional de Assistência Social. Iniciou suas atividades em julho de 2007 com o Programa de Atendimento à Família, realizando visitas domiciliares e estudos socioeconômicos nas famílias atendidas através da doação de gêneros alimentícios. Em agosto de 2007, a fundação começou a formar grupos temáticos, inicialmente com duas turmas. Cada grupo tem duração de três meses, podendo ser prorrogado por mais três meses, se necessário.  Atualmente, a fundação atende 50 famílias e 70 crianças com doações de alimentos, visando inseri-las no mercado de trabalho. Para isso, desenvolveu um projeto de Geração de Renda e Oportunidade de Trabalho, localizado na Casa do Leite, na Rua Arnaldo Rodrigues de Menezes, 15-91, Pq. Jaraguá. O projeto oferece Cursos Livres, Oficinas de Geração de Renda e orientações para gestantes.</p>
      </section>
    </div>
  );
}


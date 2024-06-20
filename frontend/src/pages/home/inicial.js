import { useNavigate } from "react-router-dom";

import "./home.css";

// IMAGENS
import LogoCrianca from "../../images/logo-crianca.png"
import LogoIdoso from "../../images/logo-idosos.png"
import LogoLeite from "../../images/logo-leite.png"

// ICONES
import { FaBookmark } from "react-icons/fa";

export default function Inicial() {
  const nav = useNavigate();

  return (
    <div className="geral-home">
      <div class="wrapperP">
        <section class="moduleP parallaxP">
          <h1>Bem-vindo!</h1>
        </section>

        <section class="moduleP contentP">
          <div class="container-parallaxP">
            <h2><FaBookmark />História</h2>
            <p>Nascido em 08 de abril de 1909, na zona rural de Bebedouro cidade do Estado de São Paulo, Sebastião Paiva começou a trabalhar na lavoura de café aos oito anos de idade, porém após o falecimento de seu pai a família começou a passar por complicações financeiras. Aos dozes anos, se mudou para a cidade onde cursou até a segunda série do primeiro grau e ingressou no curso de telegrafista na Companhia Paulista de Trem. Depois de um ano, se tornou ferroviário, e permaneceu por 30 anos. Em 1942, foi promovido para o cargo de chefe da Companhia e se mudou para Bauru.</p>
            <p>Por ser uma cidade de entroncamento ferroviário, Bauru recebia gente de todas as partes do Brasil e não tinham para onde ir; devido a isto o Sr. Paiva sentiu a necessidade de criar um local para abrigar e ajudar essas pessoas fundando então em 01 de janeiro de 1946, a Associação Beneficente Cristã, a qual manteve o Hospital Psiquiátrico até o mês de julho de 2005, a partir desse momento permanecendo a instituição como abrigos para idosos.</p>
            
          </div>
        </section>  
      </div> 

      <div className="container-projetos">
        <div className="projeto">
          <h3>Casa do Leite</h3>
          <img src={LogoLeite} alt="Logo casa do Leite" />
          <p>
            A Casa do Leite, parte da Fundação Espírita "Sebastião Paiva" em
            Bauru, é uma entidade filantrópica que oferece assistência social a
            famílias de baixa renda. Desde 2007, a fundação realiza visitas
            domiciliares, distribui gêneros alimentícios e oferece cursos
            gratuitos em áreas como informática, estética e artesanato. O
            objetivo é inserir essas famílias no mercado de trabalho, melhorando
            sua autoestima e cidadania.
          </p>

          <div className="botao-container">
            {" "}
            {/* Novo container para o botão */}
            <button onClick={() => nav("/casa-do-leite")}>Saiba mais</button>
          </div>
        </div>

        <div className="projeto">
          <h3>Casa da Criança</h3>
          <img src={LogoCrianca} alt="Logo casa da criança" />
          <p>
            A Casa da Criança Paiva, também conhecida como Sociedade de Proteção
            à Maternidade e à Criança, é uma instituição beneficente sem fins
            lucrativos localizada em Bauru, São Paulo. Fundada em 1950 pelo
            benemérito Sebastião Paiva, a Casa da Criança Paiva dedica-se a
            acolher e proteger crianças e adolescentes em situação de risco
            social, proporcionando-lhes um ambiente seguro, afetivo e com as
            condições necessárias para o seu desenvolvimento integral.
          </p>
          <div className="botao-container">
            <button onClick={() => nav("/casa-da-crianca")}>Saiba mais</button>
          </div>
        </div>

        <div className="projeto">
          <h3>Abrigo para Idosos</h3>
          <img src={LogoIdoso} alt="Logo casa da criança" />
          <p>
            Abrigo para Idosos Paiva, também conhecido como "Casa do Idoso
            Paiva", é um serviço da Sociedade Beneficente Cristã (SBC), uma
            organização sem fins lucrativos localizada em Bauru, São Paulo.
            Fundada em 1950, a SBC atua há mais de 70 anos na comunidade,
            oferecendo diversos serviços sociais, incluindo o Abrigo para
            Idosos.
          </p>
          <div className="botao-container">
            <button onClick={() => nav("/abrigo-para-idosos")}>
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

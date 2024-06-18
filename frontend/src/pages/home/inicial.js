import { useNavigate } from "react-router-dom";

import "./home.css";

// IMAGENS
import LogoCrianca from "../../images/logo-crianca.png"
import LogoIdoso from "../../images/logo-idosos.png"
import LogoLeite from "../../images/logo-leite.png"

export default function Inicial() {
  const nav = useNavigate();

  return (
    <div className="geral-home">
      <div class="wrapper">
        <section class="module parallax parallax">
          <h1>Bem-vindo!</h1>
        </section>

        <section class="module content">
          <div class="container-parallax">
            <h2>Sobre o projeto <i class="fa-solid fa-diagram-project"></i></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tempor nisi. Sed et vehicula elit, at lacinia sem. Fusce consectetur urna tortor, a malesuada magna consectetur quis. Phasellus libero libero, egestas eu vestibulum imperdiet, molestie sit amet elit. Suspendisse potenti. Morbi eget interdum nunc, sit amet commodo nisl. Nam suscipit eget libero ut tincidunt. Ut scelerisque eget nunc a ornare. In convallis sollicitudin sapien, ac consequat augue suscipit porta. Integer efficitur, justo elementum dictum finibus, magna ligula gravida tellus, eu mollis dolor nisl sit amet orci. Aliquam feugiat condimentum leo sed ullamcorper. Nam rhoncus leo sit amet molestie luctus.</p>
            <p>Morbi pulvinar velit arcu, non gravida justo malesuada quis. Integer volutpat eu metus tincidunt accumsan. Ut egestas lacus quis sodales hendrerit. Nam vel eros placerat, euismod lectus sed, vulputate nisl. Nam dignissim malesuada semper. In hendrerit porta libero nec ornare. Sed id consectetur ipsum. Etiam bibendum pharetra dapibus.</p>
            <p>Nunc sit amet lorem leo. Cras sed facilisis ipsum, ac egestas mi. Nam vitae nibh quis arcu vulputate cursus at eget metus. Pellentesque ac ullamcorper nulla. Sed luctus iaculis velit nec sodales. Morbi sagittis, neque et fermentum accumsan, tortor magna feugiat nulla, condimentum porta neque neque vel dui. Ut quis mauris arcu. Integer lobortis sem dolor, quis finibus ligula mollis ut. Ut quis leo et leo facilisis bibendum in quis neque. Sed id urna ut odio faucibus egestas. Sed non scelerisque velit. Donec tempus condimentum felis id egestas. Mauris vulputate aliquet mollis.</p>
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

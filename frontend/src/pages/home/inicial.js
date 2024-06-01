import { useNavigate } from "react-router-dom";
import home from "./home.css";

export default function Inicial() {
  const nav = useNavigate();

  return (
    <div className="geral-home">
      <div>
      </div>
      <div className="container-projetos">
        <div className="projeto">
          <h3>Casa do Leite</h3>
          <p>
            A Casa do Leite, parte da Fundação Espírita "Sebastião Paiva" em
            Bauru, é uma entidade filantrópica que oferece assistência social a
            famílias de baixa renda. Desde 2007, a fundação realiza visitas
            domiciliares, distribui gêneros alimentícios e oferece cursos
            gratuitos em áreas como informática, estética e artesanato. O
            objetivo é inserir essas famílias no mercado de trabalho, melhorando
            sua autoestima e cidadania.
          </p>
          <div className="botao-container"> {/* Novo container para o botão */}
            <button onClick={() => nav('/casa-do-leite')}>Saiba mais</button>
          </div>
        </div>

        <div className="projeto">
          <h3>Casa da Criança</h3>
          <p>A Casa da Criança Paiva, também conhecida como Sociedade de Proteção à Maternidade e à Criança, é uma instituição beneficente sem fins lucrativos localizada em Bauru, São Paulo. Fundada em 1950 pelo benemérito Sebastião Paiva, a Casa da Criança Paiva dedica-se a acolher e proteger crianças e adolescentes em situação de risco social, proporcionando-lhes um ambiente seguro, afetivo e com as condições necessárias para o seu desenvolvimento integral.</p>
          <div className="botao-container"> 
            <button onClick={() => nav('/casa-da-crianca')}>Saiba mais</button>
          </div>
        </div>

        <div className="projeto">
          <h3>Abrigo para Idosos</h3>
          <p>Abrigo para Idosos Paiva, também conhecido como "Casa do Idoso Paiva", é um serviço da Sociedade Beneficente Cristã (SBC), uma organização sem fins lucrativos localizada em Bauru, São Paulo. Fundada em 1950, a SBC atua há mais de 70 anos na comunidade, oferecendo diversos serviços sociais, incluindo o Abrigo para Idosos.</p>
          <div className="botao-container">
            <button onClick={() => nav('/abrigo-idosos')}>Saiba mais</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

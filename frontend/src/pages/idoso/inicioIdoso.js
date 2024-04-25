import "./idoso.css";

export default function Idoso() {
  return (
    <div className="container-geral">
      <header>
        <h1>Abrigo para Idosos</h1>
      </header>
      <div className="wrapper">
        <div>
          <h2>Nosso compromisso...</h2>
          <section className="container-compromisso">
            <p>
              Fundada em 01 de janeiro de 1946 pelo Sr. Sebastião Paiva, a
              entidade está localizada em Bauru/SP, e é registrada como uma
              entidade privada, filantrópica, sem fins lucrativos no Cartório de
              Registro Civil das Pessoas Jurídicas. Ela integra a Rede de
              Proteção Social de alta complexidade da Política Nacional de
              Assistência Social, oferecendo atendimento integral em regime de
              abrigo para pessoas idosas sem vínculos familiares ou com vínculos
              rompidos, além daqueles cujos direitos estejam ameaçados ou
              violados. A entidade conta com uma equipe multidisciplinar para
              fornecer um atendimento de qualidade a pessoas com 60 anos ou
              mais, de acordo com a Lei 8.842/1994 (Política Nacional do Idoso).
            </p>
          </section>
        </div>

        <section className="container-fotos">
          <div className="container-fotos">
            <h2>Fotos</h2>
          </div>
        </section>
      </div>
    </div>
  );
}

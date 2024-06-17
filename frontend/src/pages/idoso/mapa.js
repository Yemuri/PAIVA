import "./inicioIdoso.css"

export default function Mapa() {
  return (
    <div className="mapa">
      <div className="endereco">
        <h2>Onde estamos</h2>
        <p>Rua: Santa Rita, nº 1-73 - Vila Camargo</p>
        <p>CEP: 17060-130 - Bauru/SP</p>
        <p>Telefone: +55 14 3526-5544</p>
        <p>E-mail: teste@teste.com.br</p>
        <p>Horário de funcionamento: De segunda a sexta-feira das 8h às 12h e das 13h às 17h</p>
      </div>

      <div className="iframe-mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29528.61017469312!2d-49.11588546688099!3d-22.31295502106661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67ca59c6fad5%3A0x4c69cc5a9a8ff895!2sR.%20Santa%20Rita%2C%201-73%20-%20Vila%20Camargo%2C%20Bauru%20-%20SP%2C%2017060-130!5e0!3m2!1spt-BR!2sbr!4v1716389075851!5m2!1spt-BR!2sbr"
          style={{
            width: "100%",
            height: "300px",
            style: "border:0;",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}>
        </iframe>
      </div>
    </div>
  );
}

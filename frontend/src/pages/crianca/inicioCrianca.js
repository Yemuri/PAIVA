import "./crianca.css";

import CarrosselCrianca from "./carroselCrianca";

// IMAGENS
import LogoCrianca from "../../images/logo-crianca.png";
import img1 from "../../images/inst1.png";
import img2 from "../../images/inst2.png";
import img3 from "../../images/inst3.png"
import Teste from "../../images/PAIVAwhats.png"

// ICONES
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useState, useEffect } from "react";
import apiLocal from "../../APIs/APILocal";

export default function InicioCrianca() {

  const [eventos, setEventos] = useState("");
  const categoriaAtual = "placeholder"

  useEffect(() => {
    async function loadEventos() {
      const response = await apiLocal.get("/listar-eventos");
      setEventos(response.data.filter((item) => item.categoriaId === categoriaAtual));

      console.log(eventos)
    }
    loadEventos();
  }, [eventos]);

  return (
    <div className="container-geral-crianca">
      <div className="container-logo">
        <img src={LogoCrianca} alt="Logo casa da criança" />
        <header className="titulo">
          <h1>Bem-vindo à Casa da Criança</h1>
        </header>
      </div>
      <section className="eventos-crianca">

        {eventos.length === 0 ? (
          <>
            <div className="evento-crianca">
              <div className="img-evento-crianca">
                <img src={Teste} />
              </div>
              <div className="descricao-evento-crianca">
                <div className="infos-crianca">
                  <p><FaCalendarCheck /> 27 de junho de 2024</p>
                  <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
                </div>
                <h2>Cursos de Literatura</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
              </div>
            </div>
            <div className="evento-crianca">
              <div className="img-evento-crianca">
                <img src={Teste} />
              </div>
              <div className="descricao-evento-crianca">
                <div className="infos-crianca">
                  <p><FaCalendarCheck /> 27 de junho de 2024</p>
                  <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
                </div>
                <h2>Cursos de Literatura</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
              </div>
            </div>
            <div className="evento-crianca">
              <div className="img-evento-crianca">
                <img src={Teste} />
              </div>
              <div className="descricao-evento-crianca">
                <div className="infos-crianca">
                  <p><FaCalendarCheck /> 27 de junho de 2024</p>
                  <p><FaMapMarkerAlt /> Rua Alguma Coisa, 1-23, Vila do Não Sei</p>
                </div>
                <h2>Cursos de Literatura</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, nisl vel auctor suscipit, turpis felis tempus odio, quis suscipit erat elit eu ex. Vestibulum luctus, urna ac vulputate pulvinar, lacus est suscipit neque, at commodo lacus nisl quis enim. Proin pharetra lobortis sem eu rutrum.</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {eventos.map((item) => {
              return (
                <div className="evento-crianca">
                  <div className="img-evento-crianca">
                    <img src={`http://localhost:3333/files/${item.banner}`} />
                  </div>
                  <div className="descricao-evento-crianca">
                    <div className="infos-crianca">
                      <p><FaCalendarCheck /> {item.data}</p>
                    </div>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                  </div>
                </div>
              )
            })}
          </>
        )}

      </section>
      <div className="content-crianca">
        <div className="container-p">
          <p>
            A Associação de Proteção à Maternidade e à Criança (APMC), também
            conhecida como "Casa da Criança", fundada em 01/01/1950 por
            Sebastião Paiva, atualmente atende 20 crianças e adolescentes de 0 a
            17 anos e 11 meses, em conformidade com normas estabelecidas e em
            parceria com a Secretaria do Bem-Estar Social. O serviço de
            acolhimento institucional oferece proteção e cuidados temporários
            para crianças e adolescentes em situações de risco, como
            negligência, abandono, abuso ou vulnerabilidade social, garantindo
            seus direitos conforme o Estatuto da Criança e do Adolescente.
          </p>
          <img src={img1} alt="" />
        </div>
        <div className="container-p">
          <CarrosselCrianca />
          <p>
            Para promover o direito à convivência familiar e comunitária, a
            Corregedoria Geral da Justiça de São Paulo estabeleceu programas de
            Apadrinhamento Afetivo e Apadrinhamento Financeiro. O Apadrinhamento
            Afetivo possibilita que acolhidos estabeleçam laços com padrinhos
            voluntários, oferecendo experiências que fortalecem a autoestima e
            proporcionando apoio ao deixarem o serviço aos 18 anos. Já o
            Apadrinhamento Financeiro consiste em contribuições econômicas para
            atender às necessidades dos acolhidos, sem criar vínculos afetivos,
            sendo uma opção para aqueles que desejam ajudar, mas têm limitações
            de tempo.
          </p>
        </div>
        <div className="container-p">
          <p>
            Os interessados em se tornarem padrinhos ou madrinhas passam por
            avaliação e capacitação, sendo importante ressaltar que o
            apadrinhamento não substitui o processo de adoção. Cada vara da
            Infância e da Juventude decide sobre a implantação desses programas,
            estabelecendo regras específicas. Para mais informações sobre como
            se envolver, entre em contato com a Casa da Criança pelo telefone
            (14) 3222-5171!
          </p>
          <img src={img2} alt="" />
        </div>
        <div className="contato-maps">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.672620097876!2d-49.0551396248809!3d-22.328217829666553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6777759ca131%3A0x653724cac51ff7ef!2sUNISAGRADO!5e0!3m2!1spt-BR!2sbr!4v1716392893889!5m2!1spt-BR!2sbr"
              style={{
                width: "800px",
                height: "450px",
                style: "border:0;",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}
            ></iframe>
          </div>

          <div className="contato">

            <h3>Contato</h3>
            <p>
              <CiLocationOn /> Rua 12 de Outubro, 9-51, Bela Vista
            </p>
            <p>
              <FaPhone /> (14) 3222-3915
            </p>
            <p>
              <IoMdMail /> casa_da_crianca@gmail.com
            </p>
            <p>
              <MdAlternateEmail /> insta_casa_crianca
            </p>
            <p>
              <FaFacebook /> face_casa_crianca
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

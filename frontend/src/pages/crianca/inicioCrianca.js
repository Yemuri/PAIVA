import './crianca.css'
import LogoCrianca from '../../images/logosembg.png'

// import imgRaci1 from '../../images/imgraci1.jpg'
import imgRaci2 from '../../images/imgraci2.jpg'
import img3 from '../../images/img3.jpg'
import CarrosselCrianca from './carroselCrianca'
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export default function InicioCrianca() {
    return (
        <div className="container-geral-crianca">

            <div className='container-logo'>
                <img src={LogoCrianca} alt="Logo casa da criança" />
                <header className='titulo'>
                    <h1>Bem-vindo à Casa da Criança</h1>
                </header>
            </div>


            <div className='content-crianca'>
                <div className="container-p">
                    <p>
                        A Associação de Proteção à Maternidade e à Criança (APMC), também conhecida como "Casa da Criança", fundada em 01/01/1950 por Sebastião Paiva, atualmente atende 20 crianças e adolescentes de 0 a 17 anos e 11 meses, em conformidade com normas estabelecidas e em parceria com a Secretaria do Bem-Estar Social. O serviço de acolhimento institucional oferece proteção e cuidados temporários para crianças e adolescentes em situações de risco, como negligência, abandono, abuso ou vulnerabilidade social, garantindo seus direitos conforme o Estatuto da Criança e do Adolescente.
                    </p>
                    <img src={imgRaci2} alt="" />
                </div>
                <div className="container-p">
                    <CarrosselCrianca />    
                    <p>
                        Para promover o direito à convivência familiar e comunitária, a Corregedoria Geral da Justiça de São Paulo estabeleceu programas de Apadrinhamento Afetivo e Apadrinhamento Financeiro. O Apadrinhamento Afetivo possibilita que acolhidos estabeleçam laços com padrinhos voluntários, oferecendo experiências que fortalecem a autoestima e proporcionando apoio ao deixarem o serviço aos 18 anos. Já o Apadrinhamento Financeiro consiste em contribuições econômicas para atender às necessidades dos acolhidos, sem criar vínculos afetivos, sendo uma opção para aqueles que desejam ajudar, mas têm limitações de tempo.
                    </p>
                </div>
                <div className="container-p">
                    <p>
                        Os interessados em se tornarem padrinhos ou madrinhas passam por avaliação e capacitação, sendo importante ressaltar que o apadrinhamento não substitui o processo de adoção. Cada vara da Infância e da Juventude decide sobre a implantação desses programas, estabelecendo regras específicas. Para mais informações sobre como se envolver, entre em contato com a Casa da Criança pelo telefone (14) 3222-5171!
                    </p>
                    <img src={img3} alt="" />
                </div>
                <div className='contact-maps'>

                    <div className='maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.672620097876!2d-49.0551396248809!3d-22.328217829666553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf6777759ca131%3A0x653724cac51ff7ef!2sUNISAGRADO!5e0!3m2!1spt-BR!2sbr!4v1716392893889!5m2!1spt-BR!2sbr"
                        style={{
                            width:"800px",
                            height:"450px",
                            style:"border:0;",
                            allowfullscreen:"", 
                            loading:"lazy", 
                            referrerpolicy:"no-referrer-when-downgrade"
                        }}></iframe>
                    </div>
                    <div className='contact'>
                        <h3>Contato</h3>
                        <p><CiLocationOn /> Rua não sei onde</p>
                        <p><FaPhone /> (14) 99999-9999</p>
                        <p><IoMdMail /> casa_da_crianca@gmail.com</p>
                        <p><MdAlternateEmail /> insta_casa_crianca</p>
                        <p><FaFacebook /> face_casa_crianca</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
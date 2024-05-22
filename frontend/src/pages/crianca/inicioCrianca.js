import './crianca.css'
import LogoCrianca from '../../images/logosembg.png'

// import imgRaci1 from '../../images/imgraci1.jpg'
import imgRaci2 from '../../images/imgraci2.jpg'
import img3 from '../../images/img3.jpg'
import CarrosselCrianca from './carroselCrianca'




export default function InicioCrianca() {
    return (

        <div className="container-geral-crianca">
            <div className='container-logo'>
                <img src={LogoCrianca} alt="Logo casa da criança" />
                <header className='titulo'>
                    <h1>Bem vindo a Casa da Criança</h1>
                </header>
            </div>
            <section className="container-geral-p">
                <div>
                    <div className="container-p-direita">
                        <p>

                            A Associação de Proteção à Maternidade e à Criança (APMC), também conhecida como "Casa da Criança", fundada em 01/01/1950 por Sebastião Paiva, atualmente atende 20 crianças e adolescentes de 0 a 17 anos e 11 meses, em conformidade com normas estabelecidas e em parceria com a Secretaria do Bem-Estar Social. O serviço de acolhimento institucional oferece proteção e cuidados temporários para crianças e adolescentes em situações de risco, como negligência, abandono, abuso ou vulnerabilidade social, garantindo seus direitos conforme o Estatuto da Criança e do Adolescente.
                        </p>
                        <img src={imgRaci2} alt="" />
                    </div>
                    <div className="container-p-esquerda">

                        {/* <img src={imgRaci1} alt="" /> */}
                        <CarrosselCrianca />    
                        <p>
                            Para promover o direito à convivência familiar e comunitária, a Corregedoria Geral da Justiça de São Paulo estabeleceu programas de Apadrinhamento Afetivo e Apadrinhamento Financeiro. O Apadrinhamento Afetivo possibilita que acolhidos estabeleçam laços com padrinhos voluntários, oferecendo experiências que fortalecem a autoestima e proporcionando apoio ao deixarem o serviço aos 18 anos. Já o Apadrinhamento Financeiro consiste em contribuições econômicas para atender às necessidades dos acolhidos, sem criar vínculos afetivos, sendo uma opção para aqueles que desejam ajudar, mas têm limitações de tempo.
                        </p>
                    </div>
                    <div className="container-p-direita3">
                        <p>

                            Os interessados em se tornarem padrinhos ou madrinhas passam por avaliação e capacitação, sendo importante ressaltar que o apadrinhamento não substitui o processo de adoção. Cada vara da Infância e da Juventude decide sobre a implantação desses programas, estabelecendo regras específicas. Para mais informações sobre como se envolver, entre em contato com a Casa da Criança pelo telefone 14-3222-5171.
                        </p>
                        <img src={img3} alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}
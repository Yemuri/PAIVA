import './graficocrianca.css'
import LogoCrianca from '../../images/logocombg.png'

import imgRaci2 from '../../images/imgraci2.jpg'




export default function InicioCrianca(){
    return(

    <div className="container-geral">
        <div className='container-logo'>
            <img src={LogoCrianca} alt="Logo casa da criança" />
            <header className='titulo'>
            <h1>Bem vindo a Casa da Criança</h1>
            </header>
        </div>
            <section className="container-geral-p">
                <div>
                    <div className="container-p-img1">
                    <p>A Associação de Proteção à Maternidade e à Criança (APMC), conhecida como "Casa da Criança", foi fundada em 01/01/1950 por Sebastião Paiva e atende atualmente 20 crianças e adolescentes de 0 a 17 anos e 11 meses. A instituição segue as normas regulamentares em parceria com a Secretaria do Bem-Estar Social (SEBES). Conforme o Estatuto da Criança e do Adolescente (ECA), a APMC oferece acolhimento institucional temporário para menores em situação de risco, como negligência, abandono, abuso ou vulnerabilidade social dos responsáveis.</p>
                    <img src={imgRaci2} alt="" />
                    </div>
                    <p>A Associação de Proteção à Maternidade e à Criança (APMC), conhecida como "Casa da Criança", foi fundada em 01/01/1950 por Sebastião Paiva e atende atualmente 20 crianças e adolescentes de 0 a 17 anos e 11 meses. A instituição segue as normas regulamentares em parceria com a Secretaria do Bem-Estar Social (SEBES). Conforme o Estatuto da Criança e do Adolescente (ECA), a APMC oferece acolhimento institucional temporário para menores em situação de risco, como negligência, abandono, abuso ou vulnerabilidade social dos responsáveis.</p>
                    <p>A Corregedoria Geral da Justiça de São Paulo regulamenta os programas de Apadrinhamento Afetivo e Financeiro, que oferecem suporte emocional e financeiro aos acolhidos. O Apadrinhamento Afetivo permite que voluntários criem laços com os menores, proporcionando experiências positivas e apoio para desenvolver suas potencialidades. O Apadrinhamento Financeiro envolve contribuições econômicas para suprir as necessidades dos acolhidos, sem criar vínculos afetivos.</p>
                    <p>A Corregedoria Geral da Justiça de São Paulo regulamenta os programas de Apadrinhamento Afetivo e Financeiro, que oferecem suporte emocional e financeiro aos acolhidos. O Apadrinhamento Afetivo permite que voluntários criem laços com os menores, proporcionando experiências positivas e apoio para desenvolver suas potencialidades. O Apadrinhamento Financeiro envolve contribuições econômicas para suprir as necessidades dos acolhidos, sem criar vínculos afetivos.</p>
                    <p>Para mais informações, entre em contato com a Casa da Criança pelo telefone 14-3222-5171.</p>
                    
                </div>
            </section>
        </div>
    )
}
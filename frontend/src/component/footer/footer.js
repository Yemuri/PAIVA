import { Link } from 'react-router-dom';
import '../footer/footer.css'

import Modal from 'react-modal'
import { useState } from 'react'


// import Img from 'react-image'
import logo from "../../images/unisagrado-transparente-cor.png"
import logo2 from "../../images/extensao.png"
import logo3 from "../../images/unisagrado-jpg-alta-01.jpg"


import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {

    const [modalAberto, setModalAberto] = useState(false)

    function abrirModal() {
        setModalAberto(true)
    }

    function fecharModal() {
        setModalAberto(false)
    }

    return (
        <div className="container-geral">
            <div className='colunas'>
                <div className='row-footer'>
                    <h3>Navegação</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/casa-do-leite">Casa do Leite</Link></li>
                        <li><Link to="/casa-da-crianca">Casa da Criança</Link></li>
                        <li><Link to="/abrigo-para-idosos">Abrigo de Idosos</Link></li>
                    </ul>
                </div>
                <div className='contact'>
                    <h3>Contatos</h3>
                    <div className='container_icones'>
                        <span className='icon_contact'><Link to=''><FaInstagramSquare /></Link></span>
                        <span className='icon_contact'><Link to=''><FaFacebook /></Link></span>
                        <span className='icon_contact'><Link to=''><MdEmail /></Link></span>
                        <span className='icon_contact'><Link to=''><FaGoogle /></Link></span>
                        <span className='icon_contact'><Link to=''><BsFillTelephoneFill /></Link></span>
                    </div>
                    <h6 >Copyright © 2024</h6>
                </div>
                <div className='devpor'>
                    <h6>Desenvolvido por <a onClick={abrirModal} className='fabrica-software'> Fábrica de Software</a></h6>
                </div>
                <Modal isOpen={modalAberto} onRequestClose={fecharModal} className='container-modal'>
                    <div className='desenvolvedores'>
                        <h3>Desenvolvedores:</h3>

                        <a href='mailto: bruna.raissa2003@gmail.com'> <p>Bruna Raissa Correa Moura</p></a>
                        <a href='mailto: camilaapereira.r@gmail.com'> <p>Camila Pereira Raimundo</p></a>
                        <a href='mailto: Leduardocoque@gmail.com'> <p>Eduardo Coque Corrêa de Lima</p></a>
                        <a href='mailto: fernandoemmendes@gmail.com'> <p>Fernando Eduardo Motta Mendes</p></a>
                        <a href='mailto: karolinys766@gmail.com'> <p>Karoliny Bazan Silva</p></a>
                        <a href='mailto: liviabc.@gmail.com'> <p>Livia Barros Carvalho D'Avila</p></a>
                        <a href='mailto: kaualimaonunes@gmail.com'> <p>Kauã Limão Nunes</p></a>
                        <a href='mailto: thais.carolina.henrique@gmail.com'> <p>Thais Carolina Henrique</p></a>
                        <a href='mailto: yemuruwt@gmail.com'> <p>Yemuri Wanderlei Teodoro</p></a>
                    </div>

                    <div className='logo'>
                        <h3>Parceria com:</h3>
                        <h5>Projeto de Extensão - Fábrica de Softwares</h5>
                        <Link to='https://unisagrado.edu.br/site/conteudo/11184-fabrica-de-software-desenvolvimento-de-websi.html'><img width='60%' className='imagem1' src={logo2} /></Link>
                        <Link to='https://unisagrado.edu.br'><img width='100%'className='imagem1' src={logo3} /></Link>
                    </div>
                </Modal>
            </div>
        </div>
    )
}
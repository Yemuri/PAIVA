import { Link } from 'react-router-dom';
import '../footer/footer.css'

import Modal from 'react-modal'
import { useState } from 'react'


import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegArrowAltCircleUp } from "react-icons/fa";



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
            {/* <h3>Desenvolvido por: jorginho_dev_o_REI_dos_codigos</h3> */}
            {/* <div className='topo'>
                <FaArrowAltCircleUp />
            </div> */}
            <div className='colunas'>
                {/* <div className='row-footer'>
                    <h3>Desenvolvedores</h3>
                    <ul>
                        <li>Bruna Raissa Correa Moura</li>
                        <li>Camila Pereira Raimundo</li>
                        <li>Eduardo Coque Corrêa de Lima</li>
                        <li>Fernando Eduardo Motta Mendes</li>
                        <li>Karoliny Bazan Silva</li>
                        <li>Kauã Limão Nunes</li>
                        <li>Thais Carolina Henrique</li>
                        <li>Yemuri Wanderlei Teodoro</li>
                    </ul>
                </div> */}
                <div className='row-footer'>
                    <h3>Navegação</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Casa do Leite</Link></li>
                        <li><Link to="/">Casa da Criança</Link></li>
                        <li><Link to="/">Abrigo de Idosos</Link></li>
                    </ul>
                </div>
                {/* <div className='row-footer'>
                    <FaRegArrowAltCircleUp />
                </div> */}
                <div className='row-footer'>
                    <h3>Contato</h3>
                    <span className='icon_contact'><Link to=''><FaInstagramSquare /></Link></span>
                    <span className='icon_contact'><Link to=''><FaFacebook /></Link></span>
                    <span className='icon_contact'><Link to=''><MdEmail /></Link></span>
                    <span className='icon_contact'><Link to=''><FaGoogle /></Link></span>
                    <span className='icon_contact'><Link to=''><BsFillTelephoneFill /></Link></span>
                </div>
            </div>
            <div className='copyright'>
                <div><h6>Copyright © 2024 - Todos os direitos reservados</h6></div>
                <div>
                    <button onClick={abrirModal}>Abrir modal</button>
                    <Modal isOpen={modalAberto}>
                        {/* <h6>MODAL ABERTO</h6> */}
                        <div>
                            <h2>Desenvolvedores</h2>
                            <a href='mailto: camispeereira@gmail.com'> <p>Bruna</p></a>
                           <a href='mailto: email@gmail.com'> <p>Camila</p></a>
                           <a href='mailto: email@gmail.com'> <p>Fernando</p></a>
                           <a href='mailto: email@gmail.com'> <p>Karol</p></a>
                           <a href='mailto: email@gmail.com'> <p>Kaua</p></a>
                           <a href='mailto: email@gmail.com'> <p>Thais</p></a>
                           <a href='mailto: email@gmail.com'> <p>Yemuri</p></a>
                        </div>
                        <button onClick={fecharModal}>{'❌'}</button>
                    </Modal>
                </div>
            </div>
        </div> // container geral

    )
}
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
        <div>
            <div className="container-geral">
                <div className='colunas'>
                    <div className='row-footer'>
                        <h3>Navegação</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Casa do Leite</Link></li>
                            <li><Link to="/">Casa da Criança</Link></li>
                            <li><Link to="/">Abrigo de Idosos</Link></li>
                        </ul>
                    </div>
                    <div className='contact'>
                        <h3>Contato</h3>
                        <div className='container_icones'>
                            <span className='icon_contact'><Link to=''><FaInstagramSquare /></Link></span>
                            <span className='icon_contact'><Link to=''><FaFacebook /></Link></span>
                            <span className='icon_contact'><Link to=''><MdEmail /></Link></span>
                            <span className='icon_contact'><Link to=''><FaGoogle /></Link></span>
                            <span className='icon_contact'><Link to=''><BsFillTelephoneFill /></Link></span>
                        </div>
                            <h6 >Copyright</h6>
                    </div>
                    <div className='devpor'>
                        <h6>Desenvolvido por <a onClick={abrirModal} className='fabrica-software'> Fábrica de Software</a></h6>
                    </div>
                        <Modal isOpen={modalAberto} onRequestClose={fecharModal} className='container-desenvolvedores'>
                            <div className='container-texto'>
                            <h3>Desenvolvedores:</h3>

                                <a href='mailto: camispeereira@gmail.com'> <p>Bruna</p></a>
                                <a href='mailto: email@gmail.com'> <p>Camila</p></a>
                                <a href='mailto: email@gmail.com'> <p>Eduardo</p></a>
                                <a href='mailto: email@gmail.com'> <p>Fernando</p></a>
                                <a href='mailto: email@gmail.com'> <p>Karol</p></a>
                                <a href='mailto: email@gmail.com'> <p>Kaua</p></a>
                                <a href='mailto: email@gmail.com'> <p>Thais</p></a>
                                <a href='mailto: email@gmail.com'> <p>Yemuri</p></a>
                            </div>
                            
                        </Modal>
                </div>

            </div>




        </div > // container geral

    )
}
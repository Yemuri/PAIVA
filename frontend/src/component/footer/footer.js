import { Link } from 'react-router-dom';
import '../footer/footer.css'

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";


export default function Footer(){
    return(
        <div className="container-geral">
            {/* <h3>Desenvolvido por: jorginho_dev_o_REI_dos_codigos</h3> */}
            {/* <div className='topo'>
                <FaArrowAltCircleUp />
            </div> */}
            <div className='colunas'>
                <div className='row'>
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
                </div>
                <div className='row'>
                    <h3>Navegação</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Casa do Leite</Link></li>
                        <li><Link to="/">Casa da Criança</Link></li>
                        <li><Link to="/">Abrigo de Idosos</Link></li>
                    </ul>
                </div>
                <div className='row'>
                    <h3>Contato</h3>
                    <span className='icon_contact'><Link to=''><FaInstagramSquare /></Link></span>
                    <span className='icon_contact'><Link to=''><FaFacebook /></Link></span>
                    <span className='icon_contact'><Link to=''><MdEmail /></Link></span>
                    <span className='icon_contact'><Link to=''><FaGoogle /></Link></span>
                    <span className='icon_contact'><Link to=''><BsFillTelephoneFill /></Link></span>
                </div>
            </div>
            <div className='copyright'>
                <h3>Copyright © 2024 - Todos os direitos reservados</h3>
            </div>
        </div>
    )
}
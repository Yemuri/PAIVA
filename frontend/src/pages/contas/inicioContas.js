import { Link } from "react-router-dom";
import "./contas.css";
import { FaFilePdf } from "react-icons/fa6";

export default function InicioContas(){
    return(
        <div>
            <div className="container-contas">
                <div className="title_contas">
                    <h2>Prestação de Contas</h2>
                </div>

                <div className="container-cards-pdf">
                    <div className="card-pdf">
                        <div className="title-card-pdf">
                            <h3>Balanço ABC - 2024</h3>
                        </div>
                        <div className="body-card-pdf">
                            <Link><FaFilePdf /></Link>
                        </div>
                    </div>
                    <div className="card-pdf">
                        <div className="title-card-pdf">
                            <h3>Balanço ABC - 2024</h3>
                        </div>
                        <div className="body-card-pdf">
                            <Link><FaFilePdf /></Link>
                        </div>
                    </div>
                    <div className="card-pdf">
                        <div className="title-card-pdf">
                            <h3>Balanço ABC - 2024</h3>
                        </div>
                        <div className="body-card-pdf">
                            <Link><FaFilePdf /></Link>
                        </div>
                    </div>
                    <div className="card-pdf">
                        <div className="title-card-pdf">
                            <h3>Balanço ABC - 2024</h3>
                        </div>
                        <div className="body-card-pdf">
                            <Link><FaFilePdf /></Link>
                        </div>
                    </div>
                    <div className="card-pdf">
                        <div className="title-card-pdf">
                            <h3>Balanço ABC - 2024</h3>
                        </div>
                        <div className="body-card-pdf">
                            <Link><FaFilePdf /></Link>
                        </div>
                    </div>
                    <div className="card-pdf">
                        <div className="title-card-pdf">
                            <h3>Balanço ABC - 2024</h3>
                        </div>
                        <div className="body-card-pdf">
                            <Link><FaFilePdf /></Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
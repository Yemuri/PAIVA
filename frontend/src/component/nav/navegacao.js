import "./nav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Navegacao() {
  return (
    <div className="navegacao">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to='/' className="item-h">Fundação Sebastião Paiva</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/equipe' className="item-h">Equipe</Link></Nav.Link>
              <Nav.Link><Link to='/prestacao-de-contas' className="item-h">Prestação de contas</Link></Nav.Link>
              
              <NavDropdown title="Nossos Projetos" id="collapsible-nav-dropdown" className="item-h">
                <NavDropdown.Item className="item-nav-h2"><Link to='/casa-do-leite'>Casa do Leite</Link></NavDropdown.Item>
                <NavDropdown.Item className="item-nav-h2"><Link to='/casa-da-crianca'>Casa da Criança</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to='/abrigo-idosos' className="item-nav-h2">Abrigo de Idosos</Link></NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Opção teste
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link><Link to='/login' className="item-h"><FaRegUserCircle /> Acesso Restrito</Link></Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>    
  );
}

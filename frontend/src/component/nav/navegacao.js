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
          <Navbar.Brand href="#home">Projeto PAIVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><Link to='/equipe'>Equipe</Link></Nav.Link>
              <Nav.Link href="#pricing">Prestação de contas</Nav.Link>
              <NavDropdown title="Projetos" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Casa do Leite</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Casa da Criança</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Abrigogo de Idosos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Opção teste
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><Link to='/login'><FaRegUserCircle /> Acesso Restrito</Link></Nav.Link>
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

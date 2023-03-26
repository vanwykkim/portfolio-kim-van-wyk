import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  {Link} from "react-router-dom";
import Pdf from "../../assets/images/KimberlyVanWykResume.pdf";



export default class NavBarComp extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Kim Van Wyk</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link as={Link} to={"/aboutMe"}>
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to={"/portfolio"}>
                  Portfolio
                </Nav.Link>
                <Nav.Link as={Link} to={"/contactme"}>
                  Contact Info
                </Nav.Link>
                <Nav.Link href={Pdf} target="_blank">
                  Resume
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

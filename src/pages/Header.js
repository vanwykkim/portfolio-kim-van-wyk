import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/Nav";
//import ProfilePic from "../Images";

function Header() {
  return (
    <Container className="Header">
      <Col md="12">
        <Row>
          <NavBar />
        </Row>
      </Col>
    </Container>
  );
}

export default Header;
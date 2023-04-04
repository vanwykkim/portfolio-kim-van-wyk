import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function Footer(){
return (
  <Container className="footer-container">
    <Row>
      <h6>React app made with ❤️️ by Kim Van Wyk</h6>
      </Row>
      <Row>
      <p>&copy; 2023</p>
    </Row>
  </Container>
);

};
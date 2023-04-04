import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

function Home(){
  
    return (
      <Container className="Home">
        <Col>
          <Row>
            <AboutMe />
          </Row>
          <Row>
            <Portfolio />
          </Row>
          <Row>
            <ContactMe />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Col>
      </Container>
    );
  
}

export default Home;

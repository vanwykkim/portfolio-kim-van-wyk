import React, { Component } from "react";
import BoxPic from "../components/BoxPic";
import { Container, Row, Col } from "react-bootstrap";
import  "../css/Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <Container className="Portfolio">
        <Row>
          <Col md="1">
            <h1>Portfolio</h1>
          </Col>
          <Col md="11">
            <Row>
              <p>main box</p>
            </Row>
            <Row>
              <Row>
                <Col>
                  <BoxPic
                    pic={require("../assets/images/laserlights.jpg")}
                    href="https://vanwykkim.github.io/semantic-markup/"
                  />
                </Col>
                <Col>
                  <BoxPic
                    pic={require("../assets/images/laserlights.jpg")}
                    href="https://vanwykkim.github.io/semantic-markup/"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <BoxPic
                    pic={require("../assets/images/laserlights.jpg")}
                    href="https://vanwykkim.github.io/semantic-markup/"
                  />
                </Col>
                <Col>
                  <BoxPic
                    pic={require("../assets/images/laserlights.jpg")}
                    href="https://vanwykkim.github.io/semantic-markup/"
                  />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;

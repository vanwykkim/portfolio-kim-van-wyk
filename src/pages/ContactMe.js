import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {PhonePic, EmailPic, LinkedPic} from "../components/Images";
import "../css/ContactMe.css";


//another way to set default function to export
export default function ContactMe() {
  
    return (
      <Container className="ContactMe">
        <Row>
          <Col md="1">
            <h1>Contact</h1>
            <h1> Info</h1>
          </Col>
          <Col md="11">
            <Row>
              <Col>
                <PhonePic />
                <h4>425-577-4976</h4>
              </Col>
              <Col className="contact-me-pair">
                <EmailPic />
                <h4>kmvanwyk@msn.com</h4>
              </Col>
              <Col className="contact-me-pair">
                <Row>
                  <LinkedPic />
                </Row>
                <Row>
                  <a
                    href="https://www.linkedin.com/in/kimberly-van-wyk"
                    target="_blank"
                  >
                    linkedin.com/in/kimberly-van-wyk/
                  </a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }



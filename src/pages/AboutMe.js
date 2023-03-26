import React, { Component } from "react";
import {Container, Row,Col} from "react-bootstrap"

//This is a class component you can't use hooks in a class component
//class compents must inclue a render function and extend compoent from react
//render must return JSX
//also known as State Components as they implement logic and state
//constructors are used as they are needed to hold state
class AboutMe extends Component {
  render() {
    return (
      <Container className="AboutMe">
        <Row>
          <Col md="1">
            <h1>About</h1>
            <h1> Me</h1>
          </Col>
          <Col md="11">
            <p color="black">
              I graduated in 2019 from the University of Washington with a
              Bachelors of Science in Software Engineering. My favorite classes
              were Computer Human Interaction and Cloud Computing. This sparked
              an interest in me to learn more about front-end developement so I
              took a bootcamp from the University of Washington focusing on full
              stack development and specializing in browser based technologies,
              databases and server side development. I have certificates of
              completion in C and Java from Edmonds Community College as well. I
              am excited to start a fun and challenging career in software
              development using all of my newly acquired skills. I have had a
              long career in real estate. Being a licensed Realtor I am used to
              high pressure situations, negotiations, deadlines and customer
              service. I am looking forward to bringing all I have learned from
              these experiences to my new team.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bike from "../Images/biking1.jpg";
import run from "../Images/running1.jpg";
import hike from "../Images/hiking1.jpg";
import kayak from "../Images/kayaking1.jpg";
import "./style.css";

export default class Example extends React.Component {
  render() {
    return (
      <Container>


          <Row>
            <Col id="Image1">
              <img alt="Bike" src={bike} rounded />
            </Col>
            <Col id="Image2">
              <img alt="Run" src={run} rounded />
            </Col>
            <Col id="Image3">
              <img alt="Hike" src={hike} thumbnail />
            </Col>
            <Col id="Image4">
              <img alt="Kayak" src={kayak} thumbnail />
            </Col>
          </Row>
     
      </Container>
    );
  }
}
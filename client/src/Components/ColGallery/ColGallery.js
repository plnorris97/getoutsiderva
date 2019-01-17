<<<<<<< HEAD:client/src/ColGallery/ColGallery.js
import React from "react";
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
=======
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bike from '../../images/biking1.jpg';
import run from "../../images/running1.jpg";
import hike from "../../images/hiking1.jpg";
import kayak from "../../images/kayaking1.jpg";
import "./style.css";
>>>>>>> 6f04e18c540445aaa78586b871293c7354958fd3:client/src/Components/ColGallery/ColGallery.js

class HoverPage extends React.Component {
  render() {
    return (
<<<<<<< HEAD:client/src/ColGallery/ColGallery.js

        <MDBRow className="mt-3">
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Biking</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Running</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>          
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Kayaking</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Hiking</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
=======
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
>>>>>>> 6f04e18c540445aaa78586b871293c7354958fd3:client/src/Components/ColGallery/ColGallery.js
    );
  }
}

export default HoverPage;
import React from "react";

import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="unique-color" fixed="bottom" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="4">
      <h5 className="title">Get Outside RVA</h5>
      <p>
      Get Outside RVA is a movement focused on getting RVA and visitors OUTSIDE. The river city is full of outdoor opportunities and we want to connect everyone to these opportunities.
      </p>
      </Col>
      <Col md="2">
      </Col>
      <Col md="3">
      <ul>
        <h6 className="list-unstyled">
          <a href="#!">Activities</a>
        </h6>
        <h6 className="list-unstyled">
          <a href="#!">Parks</a>
        </h6>
        <h6 className="list-unstyled">
          <a href="#!">Search</a>
        </h6>
        <h6 className="list-unstyled">
          <a href="#!">Log In/Sign Up</a>
        </h6>
      </ul>
      </Col>
      <Col md="3">
      <ul>
        <h6 className="list-unstyled">
          <a href="#!">About</a>
        </h6>
        <h6 className="list-unstyled">
          <a href="#!">Partners</a>
        </h6>
        <h6 className="list-unstyled">
          <a href="#!">Resources</a>
        </h6>
        <h6 className="list-unstyled">
          <a href="#!">Contact</a>
        </h6>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.getoutsiderva.com"> GetOutsideRVA.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;
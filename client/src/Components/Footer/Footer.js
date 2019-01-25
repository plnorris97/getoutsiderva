import React from "react";

import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer color="unique-color" fixed="bottom" className="font-small pt-4 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title">Get Outside RVA</h5>
      <p>
      Get Outside RVA is a movement focused on getting RVA and visitors OUTSIDE. The river city is full of outdoor opportunities and we want to connect everyone to these opportunities.
      </p>
      </Col>
      <Col md="6">
      <h5 className="title">About</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!">About</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Partners</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Resources</a>
        </li>
        <li className="list-unstyled">
          <a href="#!">Contact</a>
        </li>
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
import React from "react";
import './style.css';
import { Col, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer, Container, Row, Footer, MDBRow, MDBCol } from "mdbreact";
import coder from '../../images/coder.png';
import jenny from '../../images/Jenny.jpg';


class FooterPage extends React.Component {
render() {
return (
<Footer fixed="bottom" className="font-small pt-4 mt-4">
  <MDBContainer fluid className="text-center text-md-left">
  <Row>
    <Col>
    <h3 className="FooterHeader">Meet the Developers!<img alt="icon" src= {coder}/></h3>
    </Col>
  </Row>
  <MDBRow center style={{marginTop:"2rem"}} >
        <MDBCol size="3"> 
        <MDBCard style={{ width: "25rem"}}>
        <MDBCardImage className="img-fluid rounded-circle" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:"coral"}}>Tricia Norris</MDBCardTitle>
          <MDBCardText>
          Full Stack Developer
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>
        <MDBCol size="3">
        <MDBCard style={{ width: "25rem" }}>
        <MDBCardImage className="img-fluid rounded-circle" src={jenny} waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:"coral"}}>Jenny Liang 
          </MDBCardTitle>
          <MDBCardText>
            Frontend Developer
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>
      </MDBRow>
  </MDBContainer>
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
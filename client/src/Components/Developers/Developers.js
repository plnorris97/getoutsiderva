import React from "react";
import './style.css';
import { Col, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer, Row, MDBRow, MDBCol } from "mdbreact";
import coder from '../../images/coder.png';
import jenny from '../../images/Jenny.jpg';
import tricia from '../../images/Tricia.jpg';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';


class DeveloperPage extends React.Component {
render() {
return (

  <MDBContainer>
  <Row>
    <Col>
    <h3 className="FooterHeader">Say Hello to the Developers<img style={{marginLeft:"3rem"}} alt="icon" src= {coder}/></h3>
    </Col>
  </Row>
  <MDBRow center style={{marginTop:"2rem"}} className="mt-3">
        <MDBCol size="4"  md="3"> 
        <MDBCard style={{maxHeight:"25rem"}}>
        <MDBCardImage className="img-fluid rounded-circle" src={tricia} waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:"coral"}}>Tricia Norris</MDBCardTitle>
          <MDBCardText>
          Full Stack Developer
          </MDBCardText>
            <a href="https://github.com/plnorris97"><img style={{ padding:"1.5rem"}} className="d-inline-block" src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/tricianorris/"><img style={{ padding:"1.5rem"}} className="d-inline-block" src={linkedin} alt="linkedin" /></a>
        </MDBCardBody>
      </MDBCard>
        </MDBCol>
        <MDBCol size="4" md="3">
        <MDBCard style={{maxHeight:"25rem"}}>
        <MDBCardImage className="img-fluid" style={{ padding:"2.5rem"}} src={jenny} waves />
        <MDBCardBody>
          <MDBCardTitle style={{color:"coral"}}>Jenny Liang 
          </MDBCardTitle>
          <MDBCardText>
            Frontend Developer
          </MDBCardText>
          <a href="https://github.com/JennyLiang804"><img style={{ padding:"1.5rem"}} className="d-inline-block" src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/jennyliang804/"><img style={{ padding:"1.5rem"}} className="d-inline-block" src={linkedin} alt="linkedin" /></a>

        </MDBCardBody>
      </MDBCard>
        </MDBCol>
      </MDBRow>
  </MDBContainer>

);
}
}

export default DeveloperPage;
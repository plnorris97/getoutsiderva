import React from "react";
import { Col, Row, Container } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
 return (
   <Container fluid>
     <Row>
       <Col size="md-12">
         <Jumbotron>
           <h1>404 This Page Was Not Found</h1>
           <h1>
             <span role="img" aria-label="Face With Rolling Eyes Emoji">
               :face_with_rolling_eyes:
             </span>
           </h1>
         </Jumbotron>
       </Col>
     </Row>
   </Container>
 );
}

export default NoMatch;
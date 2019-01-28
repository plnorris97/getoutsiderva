import React from "react";
import { Col, Row, Container } from 'reactstrap';
import JumbotronPage from "../Components/Jumbotron/Jumbotron";

function NoMatch() {
 return (
   <Container fluid>
     <Row>
       <Col size="md-12">
         <JumbotronPage />
        </Col>
     </Row>
   </Container>
 );
}

export default NoMatch;
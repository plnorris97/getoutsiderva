import React from "react";
import { Col, Row, Container } from 'reactstrap';
import JumbotronPage from "../Components/Jumbotron/Jumbotron";

function NoMatch() {
 return (
   <Container fluid>
     <Row>
       <Col size="md-12">
         <JumbotronPage>
           <h1>404 This Page Was Not Found</h1>
           <h1>
             <span role="img" aria-label="Face With Rolling Eyes Emoji">
               :face_with_rolling_eyes:
             </span>
           </h1>
         </JumbotronPage>
       </Col>
     </Row>
   </Container>
 );
}

export default NoMatch;
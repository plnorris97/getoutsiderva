import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "../ResultsWrapper/ResultsWrapper.css";
import "../../Pages/Detail.js"
  
function ResultsWrapper(props){
  return(
    <Card>
      <CardBody key={props.parks.id}>
        {/* <CardImg src={props.parks.image} alt="nothing"></CardImg> */}
        <CardTitle>{props.parks.name}</CardTitle>
        <CardSubtitle>by {props.parks.county}</CardSubtitle>
        <CardText>{props.parks.address}</CardText>
        <CardText>{props.parks.description}</CardText>
        <CardText>{props.parks.activities}</CardText>
        <CardText>{props.parks.amenities}</CardText>
        {/* <Button id={props.book.id} className="view-btn">View</Button> */} */}
      </CardBody>
    </Card>
  )
}  
export default ResultsWrapper;
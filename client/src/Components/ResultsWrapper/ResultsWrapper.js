import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "../ResultsWrapper/ResultsWrapper.css";
// import "../../Pages/Detail.js"
  
function ResultsWrapper(props){
  return(
    <Card>
      <CardBody key={props.park.id}>
        {/* <CardImg src={props.parks.image} alt="nothing"></CardImg> */}
        <CardTitle>{props.park.name}</CardTitle>
        <CardSubtitle>{props.park.county}</CardSubtitle>
        <CardText>{props.park.address}</CardText>
        <CardText>{props.park.description}</CardText>
        <CardText>{props.park.activities}</CardText>
        <CardText>{props.park.amenities}</CardText>
        {/* <Button id={props.book.id} className="view-btn">View</Button> */}
        <CardHeader>{props.parks.name}</CardHeader>
        <CardTitle>by {props.parks.county}</CardTitle>
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
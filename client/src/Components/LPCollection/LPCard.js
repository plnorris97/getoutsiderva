import React from "react";
import { Card, CardImg, CardBody,
    CardTitle, Button } from 'reactstrap';
// import { PromiseProvider } from "mongoose";
// import { Jumbotron, MDBContainer, View, Mask } from "mdbreact";
// import {Row, Col} from 'bootstrap';


const LPCard = (props) => {
    return (
        <div>
            <Card key={props.park.name}>
            <CardImg top width="100%" src={require(`../../images/${this.props.path}.jpg`)} />
            <CardBody>
                <CardTitle>{props.park.name}</CardTitle>
                <Button id={props.park.id} className="view-button">View</Button>
            </CardBody>
            </Card>
        </div>
        );
    };
export default LPCard;
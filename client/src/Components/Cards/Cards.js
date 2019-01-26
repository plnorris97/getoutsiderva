import React from 'react';
import { CardHeader, MDBIcon, Card, CardBody, CardImage, CardTitle, CardText, Col, Row, } from 'mdbreact';
// import './style..css';

class Cards extends React.Component {
    // renderSwitch(path) {
    //     switch(path) {
    //         case '/activities/paddle-sports': return 'paddle-sports.jpg';
    //         default: return 'image.jpg';
    //     }
    // }


  render() {
      const  { name, description, parks, img, address }= this.props
    return (

        <Row className="mt-3">
            <Col md="3">
                <Card style={{ width: "15rem", marginLeft: "4rem", marginRight: "4rem", padding: "1rem" }}>
                
                <CardImage
                    className="img-fluid"
                    src= {img}
                    waves
                />

                <CardBody>
                    <CardHeader style={{ backgroundColor: "white" }}><h4> {name} </h4></CardHeader>
                    <CardTitle style={{ color: "#3F729B" }}></CardTitle>
                    <CardText><MDBIcon icon="map-marker" style={{ marginReft: "2rem" }} />
                    { address }
                    </CardText>
                    <CardText><h5>Parks available:</h5> 
                    { parks }
                    </CardText>
                    <CardText><h5>Description:</h5> 
                    { description }
                    </CardText>
                   
                    <CardText>
                
                    </CardText>
                    {/* <Button href="#">Button</Button> */}
                </CardBody>
                </Card>
            </Col>
            {/* <Col md="3">
                <Card style={{ width: "25rem", marginLeft: "1rem" }}>
                <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                    waves
                />
                <CardBody>
                    <CardHeader style={{ backgroundColor: "white" }}><h4> Park Name </h4></CardHeader>
                    <CardTitle style={{ color: "#3F729B" }}>County</CardTitle>
                    <CardText><MDBIcon icon="map-marker" />
                    address
                    </CardText>
                    <CardText>
                    descriptoin
                    </CardText>
                    <CardText>
                    activities
                    </CardText>
                    <CardText>
                    amenities
                    </CardText>
                </CardBody>
                </Card>
            </Col>
 */}

        </Row>


    )
  }
}

export default Cards;
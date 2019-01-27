import React from 'react';
import { CardHeader, MDBIcon, Card, CardBody, CardImage, CardTitle, CardText, Col, Row, } from 'mdbreact';
// import './style..css';

class Cards extends React.Component {
  render() {
      const  { name, description, image, address }= this.props
    return (

        <Row className="mt-6">
            <Col md="3">
                <Card style={{ margin: "5rem", padding: "1rem", width:"50rem" }}>
                
                <CardImage
                    className="img-fluid, no-margin"
                    // Image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).jpg"
                    src={Image}
                    waves
                />

                <CardBody>
                    <CardImage src={image}></CardImage>
                    <CardHeader style={{ backgroundColor: "white", textAlign: "left" }}><a href={"activities/"+ name}><h4> {name} </h4></a></CardHeader>
                    <CardTitle style={{ color: "#3F729B" }}></CardTitle>
                    <CardText><MDBIcon icon="map-marker" style={{ marginReft: "2rem" }} />
                    { address }
                    </CardText>
                    <CardText style={{ marginLeft: "1.5rem", textAlign: "left" }}><h5>Description</h5> 
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
import React from 'react';
import { CardHeader, MDBIcon, Card, CardBody, CardImage, CardTitle, CardText, Col, Row, } from 'mdbreact';
// import './style..css';
//*******This code handles the park cards on the Activity Detail page******
const parseStr = (str) => {
    // let newStr=str.split("-").join(" ");
    // return newStr;
    let newStr = str.replace(/-/g, ' ')
    let strArr = newStr.split(' ');
    let newArr = []
    for (let i = 0; i < strArr.length; i++) {
      newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
    }
     let finishedStr = newArr.join(' ');
     return finishedStr;
  }

class Cards extends React.Component {
  render() {
      const  { description, image, address }= this.props
      const parsedName = parseStr(this.props.name)

    return (

        <Row className="mt-6">
            <Col md="3">
                <Card style={{ margin: "2rem", padding: "0.5rem", width:"50rem" }}>
                
                <CardImage
                    className="img-fluid, no-margin"
                    // Image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).jpg"
                    src={Image}
                    waves
                />

                <CardBody>
                    <CardImage src={image}></CardImage>
                    <CardHeader style={{ backgroundColor: "white" }}><a href={"../parks/" + this.props.name}><h4> {parsedName} </h4></a></CardHeader>
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
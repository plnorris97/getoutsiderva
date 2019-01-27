// import './App.css';
// import { Link } from 'react-router-dom';
// import { Card, CardText, CardBody,
//     CardTitle, CardSubtitle } from 'reactstrap';

import React, { Component } from 'react';
import API from '../utils/API';
import Hero from '../Components/Hero/Hero';
// import { Row, Col } from 'reactstrap';
import { MDBRow, MDBCol } from "mdbreact";
import ParkGallery from '../Components/Gallery/ParkGallery';



class ParksLP extends Component {
    state = {
        // Search button holds the query parameters
        parks: []

    }
    componentDidMount() {
        // look up activities when the page loads
        this.loadParks();
    }

    loadParks = () => {
        API.getParks()
            .then(res => {
                console.log(res.data)
                this.setState({ parks: res.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            <Hero />
             {/* <Row>  
                    <Col>
                    {this.state.parks.length ? (
                        <Card>
                            {this.state.parks.map(park => (
                            <CardBody key={park._id}>
                                <CardTitle>{park.Name}</CardTitle>
                                <CardSubtitle>{park.County}</CardSubtitle>
                                <CardText>{park.Address}</CardText>
                                <CardText>{park.Description}</CardText>
                                <CardText>{park.Amenities}</CardText>
                                <CardText>{park.Activities}</CardText>
                            </CardBody>
                            ))}
                        </Card>
                    ) : (
                        <p>Parks should render here as cards.</p>   
                    )}
                    </Col> 
                </Row> */}

                <MDBRow lg="3" md="6" className="mt-3">  
                    {this.state.parks.length ? ( 
                        this.state.parks.map(park => (
                            <MDBCol md="3">
                                <ParkGallery 
                                key={park._id}
                                img={park.Image}
                                name={park.Name}
                                park={park.Name.split(" ").join("-").toLowerCase("")}
                                />
                                </MDBCol>
                        ))
                    ) : (     
                        <p>no data</p>
                    )}
                </MDBRow>
            </div>
        )
    };
}

export default ParksLP;


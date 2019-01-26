// import './App.css';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';
// import {  Row, Col } from 'reactstrap';

import React, { Component } from 'react';
import API from '../utils/API';
import { MDBMask, MDBRow, MDBCol } from "mdbreact";

import Hero from '../Components/Hero/Hero';
import ActivityParkGallery from '../Components/Gallery/ActivityParkGallery';

class ActivitiesLP extends Component {
    state = {
        // Search button holds the query parameters
        activities: []

    }
    componentDidMount() {
        // look up activities when the page loads
        this.loadActivities();
    }

    loadActivities = () => {
        API.getActivities()
            .then(res => {
                console.log(res.data)
                this.setState({ activities: res.data })
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
            <Hero />
                <MDBRow lg="3" md="6" className="mt-3">  
                    {this.state.activities.length ? (
                            this.state.activities.map(activities => (
                                <MDBCol md="3">
                                <ActivityParkGallery 
                                    key={activities._id}
                                    img={activities.img}
                                    name={activities.name}
                                    // parks={activities.parks}
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

export default ActivitiesLP;


// import './App.css';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';

import React, { Component } from 'react';
import API from '../utils/API';
import {  Row, Col } from 'reactstrap';
import Hero from '../Components/Hero/Hero';
import Cards from '../Components/Cards/Cards';

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
            {
                /* 
                    {this.state.activities.length ? (
                        <Card>
                            {this.state.activities.map(activities => (
                            <CardBody key={activities._id}>
                                <CardTitle>{activities.name}</CardTitle>
                                <CardText>{activities.description}</CardText>
                                <CardText>{activities.parks}</CardText>
                            </CardBody>
                            ))}
                        </Card>
                    ) : (
                        <Cards />  
                    )}
 */
            }
          
                <Row className="mt-3">  
                    
                    {this.state.activities.length ? (
                        
                            this.state.activities.map(activities => (
                                <Col md="3">
                                <Cards 
                                    key={activities._id}
                                    img={activities.img}
                                    name={activities.name}
                                    parks={activities.parks}
                                    description={activities.description}
                                    
                                /> 
                                </Col> 
                            ))
                        
                    ) : (
                    <p>no data</p>   
                    )}
                    
                    
                </Row>
        
            </div>
        )
    };
}

export default ActivitiesLP;


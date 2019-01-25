
import React, { Component } from 'react';
// import './App.css';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import {  Row, Col } from 'reactstrap';
import Hero from '../Components/Hero/Hero';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
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
                {/* <LazyHero img src={require(`../../images${this.props.path}.jpg`)} alt="nothing">{this.props.name}</LazyHero> */}
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
                    <Col md="3">
                    {this.state.activities.length ? (
                        
                            this.state.activities.map(activities => (
                                <Cards 
                                    key={activities._id}
                                    name={activities.name}
                                    description={activities.description}
                                    parks={activities.parks}
                                /> 
                            ))
                        
                    ) : (
                    <p>no data</p>   
                    )}
                    </Col> 
                    
                </Row>
        
            </div>
        )
    };
}

export default ActivitiesLP;


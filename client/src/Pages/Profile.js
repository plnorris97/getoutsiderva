
import React, { Component } from 'react';
// import './App.css';
import API from '../utils/API';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Profile extends Component {
    state = {
        // Define the state of the page
        

    }
    componentDidMount() {
        // connect to the user's record in the database
        // look up user's account information when the page loads
        // this.loadActivities();
    }

    // *********Create a loadAccount function here***************
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
            <Container>
                <Row>
                    {/* cover photo */}
                    {/* upload file/camera button */}
                </Row>
                <Row>  
                    <Col>
                    {/* Image */}
                    {/* upload file/camera button */}
                    </Col> 
                    <Col>
                    {/* user's name */}
                    {/* user join date (month, year) */}
                    </Col>
                    <Col>
                    {/* edit profile button */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* Friends quadrant */}
                    </Col>
                    <Col>
                    {/* Badges/Points quadrant */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* Reviews quadrant */}
                    </Col>
                    <Col>
                    {/* Challenges quadrant */}
                    </Col>
                </Row>
            </Container>
            </div>
        )
    };
}

export default Profile;


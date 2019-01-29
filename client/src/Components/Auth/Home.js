import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { View, Mask } from "mdbreact";
import LoginForm from './Signin';
import Signup from './Signup';
import './style.css';

class HomeAuth extends Component {
    
    render() {
        return (
            <body id="signInPage">
            <div className="background">
            
                
                <Container>
                
                    <Row className="header" color="white">
                    
                        <h2>Login to your account or join the Get Outside RVA family and create your profile!</h2>
                    </Row>
                    <Row>
                        <Col className="login-col">                        
                        <LoginForm />
                        </Col>
                        <Col className="signup-col">                        
                        <Signup />
                        </Col>
                    </Row>
                    <Row className="signInDetail">
                    <p>Once logged in, provide reviews on parks, activities and all things OUTSIDE in RVA!</p>
                    <p>Share your stories and your experiences and find like-minded activity seekers to get outside and have fun.</p>

                    </Row>
                </Container>
                <Mask overlay="grey-strong" />
              
            </div>
            </body>
        )
    }
}

export default HomeAuth;
import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import LoginForm from './Signin';
import Signup from './Signup';

class HomeAuth extends Component {
    
    render() {
        return (
            <div>
                <Container>
                    <Row>
                <h2>Login to your account or join the Get Outside RVA family and create your profile!</h2>
                <p>Once logged in, provide reviews on parks, activities and all things OUTSIDE in RVA!</p>
                <p>Share your stories and your experiences and find like-minded activity seekers to get outside and have fun.</p>
                    </Row>
                    <Row>
                        <Col>
                        {/* <img src='https://s3.amazonaws.com/cdn.ideastations.org/radio-images/article-width/captrail_main.jpg' alt="Log In" /> */}
                        <h3>Login to your account and start sharing!</h3>
                        <LoginForm />
                        </Col>
                        <Col>
                        {/* <img src='https://i0.wp.com/seekthegreatness.com/wp-content/uploads/2018/09/092718_STG_lazyman.jpg?w=612&ssl=1'alt="Sign Up"/> */}
                        <h3>Don't have an account? Create one!</h3>
                        <Signup />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomeAuth;
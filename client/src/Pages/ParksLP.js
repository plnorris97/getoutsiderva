
import React, { Component } from 'react';
// import './App.css';
// import { Link } from 'react-router-dom';
import API from '../utils/API';
import { Container, Row, Col } from 'reactstrap';
import Hero from '../Components/Hero/Hero';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

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
                {/* <LazyHero img src={require(`../../images${this.props.path}.jpg`)} alt="nothing">{this.props.name}</LazyHero> */}
            <Hero />
            <Container>
                <Row>  
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
                </Row>
            </Container>
            </div>
        )
    };
}

export default ParksLP;



import React, { Component } from 'react';
// import './App.css';
<<<<<<< HEAD
import API from '../utils/API';
import { Container, Row, Col } from 'reactstrap';
import {LPCollection} from '../Components/LPCollection/LPCollection';
// need banner/hero image component here.
// import BannerImage from '../Components/BannerImage/BannerImage';
import LazyHero from 'react-lazy-hero';


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
        .then(res =>
            this.setState({activities: res.data})
          )
          .catch(err => console.log(err))
    }
    render() {
        return (
            // <div>
            // <LazyHero img src={require(`../../images/${this.props.path}.jpg`)} alt="nothing" />
            //     <h1>{this.props.name}</h1> />
            // </div>
            // Row
            // Description text 
            <Container>
                <Row>
                    {this.state.activities.length ? (
                        this.state.activities.map(activity => (
                            <LPCollection className="lp-results"
                            activity = {activity}
                            />
                        ))
                    ):(
                        <Col className="lp-alert">
                        <h2>Oops no activies are showing up!</h2></Col>
                    )}  
                </Row>
            </Container>
        )
    };
}

export default ActivitiesLP;

=======
import Carousel from '../Components/Carousel/Carousel';
import Input from '../Components/InputBox/Input';
import Gallery from '../Components/Gallery/Gallery';
// import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Video from '../Components/Video/Video';


class Activities extends Component {
    state = {
      // Search button holds the query parameters
        Search: ""

    }
    // componentDidMount() {
    //     // look up activities when the page loads
    //     this.loadActivities();
    // }
    render() {
        return (
        <div>
            <Carousel />
            <br />
            <Input />
            <br />
            <Gallery />
            <br />
            <Video />
            <br />
            {/* <Jumbotron /> */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Activities;
>>>>>>> master

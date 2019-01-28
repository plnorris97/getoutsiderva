// import './App.css';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';
// import {  Row, Col } from 'reactstrap';

import React, { Component } from 'react';
import API from '../utils/API';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import AddActivityForm from '../Components/AddItems/AddActivity';
import Hero from '../Components/Hero/Hero';
import ActivityGallery from '../Components/Gallery/ActivityGallery';

class ActivitiesLP extends Component {
    constructor() {
        super() 
        this.state = {
            // Search button holds the query parameters
            activities: [],
            viewForm: false,
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            description: '',
            // activities array
            amenities: []
        };
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
    };

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
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        })
        console.log(event.target.id)
    };

    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')
        if (this.state.name && this.state.description && this.state.parks) {
            API.addPark({
                name: this.state.name,
                description: this.state.description,
                parks: this.state.parks
            })
            .then (res => this.addPark())
            .catch(err => console.log(err))
        }
    };

    showForm = () => {
        this.setState({
            viewForm: true
        })
    };

    addActivity = () => {
        API.addActivity()
            .then(res=>{
                console.log(res)
                this.setState({ activities: res.data})
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
                                <ActivityGallery 
                                    key={activities._id}
                                    img={activities.img}
                                    name={activities.name}
                                    activities={activities.name.split(" ").join("-").toLowerCase("")}
                                /> 
                                </MDBCol> 
                                
                            ))    
                    ) : (
                    <p>Oops we don't have data! </p>   
                    )}                    
                </MDBRow>
                <MDBRow>
                    <MDBCol md="12" style={{ textAlign: "center" }}>
                        <h5>Don't see an activity listed here? Add it now.</h5>
                        <MDBBtn color="deep-orange" onClick={this.showForm}>Add Activity</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    };
}

export default ActivitiesLP;


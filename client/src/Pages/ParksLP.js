import React, { Component } from 'react';
import API from '../utils/API';
import Hero from '../Components/Hero/Hero';
// import { Row, Col } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ParkGallery from '../Components/Gallery/ParkGallery';
import { Input, TextArea, FormBtn } from '../Components/AddItems/AddItem';

class ParksLP extends Component {
    constructor() {
        super() 
        this.state = {
            // Search button holds the query parameters
            parks: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            description: '',
            // activities array
            amenities: []
            };
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    };

    componentDidMount() {
        // look up activities when the page loads
        this.loadParks();
    }

    loadParks = () => {
        API.getParks()
            .then(res => {
                this.setState({ parks: res.data })
            })
            .catch(err => console.log(err))
        };
    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value,
    //     })
    //     console.log(event.target.id)
    // };

    // handleSubmit = event => {
    //     event.preventDefault()
    //     console.log('handleSubmit')
    //     if (this.state.name && this.state.address && this.state.city && this.state.state && this.state.description && this.state.amenities && this.state.activities) {
    //         API.addPark({
    //             name: this.state.name,
    //             address: this.state.address,
    //             city: this.state.city,
    //             state: this.state.state,
    //             zip: this.state.zip,
    //             description: this.state.description,
    //             amenities: this.state.amenities,
    //             activities: this.state.activities
    //         })
    //         .then (res => this.addPark())
    //         .catch(err => console.log(err))
    //     }
    // };

    // showForm = () => {
    //     this.setState({
    //         viewForm: true
    //     })
    // };

    render() {
        return (
            <div>
            <Hero />
            <MDBContainer>
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
                    <p>Oops we don't have data!</p>
                )}
            </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <hr />
                <br />
                <MDBRow>
                    <MDBCol md="3" style={{ textAlign: "center" }}>
                        <h5>Don't see a park listed here?</h5>
                        <h5>Add it now!</h5>
                    </MDBCol>
                    <MDBCol md="9">
                        <form>
                            <div className="grey-text">
                            <Input
                                placeholder="Name (required)"
                                id="activity"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <Input
                                placeholder="Address"
                                id="activity"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                            <Input
                                placeholder="City (required)"
                                id="activity"
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                            <Input
                                placeholder="State"
                                id="activity"
                                value={this.state.state}
                                onChange={this.handleChange}
                            />
                            <Input
                                placeholder="Zip"
                                id="activity"
                                value={this.state.zip}
                                onChange={this.handleChange}
                            />
                            <TextArea
                                placeholder="Park Description"
                                id="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                            <FormBtn 
                            color="primary" 
                            onClick={this.handleSubmit}
                            >
                            Submit
                            </FormBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        )
    };
}

export default ParksLP;


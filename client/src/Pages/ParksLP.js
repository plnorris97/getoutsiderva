import React, { Component } from 'react';
import API from '../utils/API';
import Hero from '../Components/Hero/Hero';
// import { Row, Col } from 'reactstrap';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ParkGallery from '../Components/Gallery/ParkGallery';
// import AddParkForm from '../Components/AddItems/AddPark';

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
                console.log(res.data)
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
            <MDBCol md="6">
                <h5>Don't see a park listed here? Add it now.</h5>
                {/* <MDBBtn color="deep-orange" onClick={this.showForm}>Add Park</MDBBtn> */}
                {/* <AddParkForm /> */}
            </MDBCol>
        </div>
        )
    };
}

export default ParksLP;


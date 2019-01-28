import React, {Component} from 'react';
import API from '../../utils/Auth/API';
import { MDBContainer, MDBRow, MDBCol, Form, FormGroup, MDBInput, MDBBtn } from 'mdbreact';

class AddParkForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            description: '',
            activities: [],
            amenities: []
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)

    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        })
        console.log(event.target.id)
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')
        if (this.state.name && this.state.address && this.state.city && this.state.state && this.state.description && this.state.amenities && this.state.activities) {
            API.addPark({
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                description: this.state.description,
                amenities: this.state.amenities,
                activities: this.state.activities
            })
            .then (res => this.addPark())
            .catch(err => console.log(err))
        }
    };
    //     axios
    //         .post('/api/signin', {
    //             userName: this.state.userName,
    //             password: this.state.password
    //         })
    //         .then(response => {
    //             console.log('login response: ')
    //             console.log(response)
    //             if (response.status === 200) {
    //                 // update App.js state
    //                 this.props.updateUser({
    //                     loggedIn: true,
    //                     userName: response.data.userName
    //                 })
    //                 // update the state to redirect to home
    //                 this.setState({
    //                     redirectTo: '/'
    //                 })
    //             }
    //         }).catch(error => {
    //             console.log('login error: ')
    //             console.log(error);

    //         })
    // }

    render() {
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // } else {
            return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                        {/* <p className="h5 text-center mb-4">Sign In</p> */}
                        <div className="grey-text">
                        {/* <MDBIcon icon="user" /> */}
                            <MDBInput
                                label="Park Name"
                                icon="user"
                                id="name"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="Address"
                                icon="lock"
                                id="address"
                                group
                                type="text"
                                validate
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="City"
                                icon="lock"
                                id="city"
                                group
                                type="text"
                                validate
                                value={this.state.city}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="State"
                                icon="lock"
                                id="state"
                                group
                                type="text"
                                validate
                                value={this.state.state}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="Description"
                                icon="lock"
                                id="description"
                                group
                                type="text"
                                validate
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="Amenities"
                                icon="lock"
                                id="amenities"
                                group
                                type="checkbox"
                                validate
                                value={this.state.amenities}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="Activities"
                                icon="lock"
                                id="activities"
                                group
                                type="checkbox"
                                validate
                                value={this.state.activities}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="primary" onClick={this.handleSubmit}>Submit</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
            )
        }
    }

export default AddParkForm;
import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, Form, FormGroup, MDBInput, MDBBtn } from 'mdbreact';

class AddParkForm extends Component {
    
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
        return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <Form>
                        <FormGroup>
                        <p className="h5 text-center mb-4">Add a Park</p>
                        <div className="grey-text">
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
                                label="Zip"
                                icon="lock"
                                id="zip"
                                group
                                type="text"
                                validate
                                value={this.state.zip}
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
                        </FormGroup>
                    </Form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
        )
    }
}

export default AddParkForm;
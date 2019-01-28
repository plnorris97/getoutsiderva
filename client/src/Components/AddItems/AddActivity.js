import React, {Component} from 'react';
import API from '../../utils/Auth/API';
import { MDBContainer, MDBRow, MDBCol, Form, FormGroup, MDBInput, MDBBtn } from 'mdbreact';

class AddActivityForm extends Component {
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
                    <form>
                    <p className="h5 text-center mb-4">Add an Activity</p>
                    <div className="grey-text">
                        <MDBInput
                            label="Activity"
                            icon="user"
                            id="activity"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={this.state.activity}
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

export default AddActivityForm;
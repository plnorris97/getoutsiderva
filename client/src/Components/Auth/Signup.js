import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Col } from 'reactstrap';
import API from '../../utils/Auth/API';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


class Signup extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			password: '',
			confirmPassword: '',
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        })
        console.log(event.target.id)
    }

	checkSignup = (res) => {
		API.checkAuth()
			if (!res.data.err && (this.state.password === this.state.confirmPassword)) {
				console.log('successful signup')
				this.setState({ //redirect to login page
					redirectTo: '/'
				})
			} else {
				console.log('username already taken')
			}  
		}

	handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')
        if (this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password) {
            API.createUser({
                firstName: this.state.firstName,
				lastName: this.state.lastName,
				userName: this.state.userName,
				email: this.state.email,
				password: this.state.password,
				confirmPassword: this.state.confirmPassword
			})
			// console.log("created a user")
            .then (res => this.checkSignup(res)) 
            .catch(err => console.log(err));
        }
    };

render() {
	if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
			return (
				<div className="SignupForm">
					<h4>Sign up and GET OUTSIDE!</h4>
					<MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                        {/* <p className="h5 text-center mb-4">Sign In</p> */}
                        <div className="grey-text">
							<MDBInput
                                label="First Name"
								icon="user"
								id="firstName"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
							 <MDBInput
                                label="Last Name"
								icon="user"
								id="lastName"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
							<MDBInput
                                label="User Name"
								icon="user"
								id="userName"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={this.state.userName}
                                onChange={this.handleChange}
                            />
							 <MDBInput
                                label="Email"
								icon="envelope"
								id="email"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="Password"
								icon="lock"
								id="password"
                                group
                                type="password"
                                validate
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="primary" disabled={!this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password} onClick={this.handleSubmit}>Sign Up</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
				</div>

			)
		}
	}
}

export default Signup;
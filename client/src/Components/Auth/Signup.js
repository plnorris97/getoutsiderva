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
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
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
			console.log("created a user")
            .then (res => {
                console.log('login response: ')
                console.log(res)
				if (!res.data.err && (this.state.password === this.state.confirmPassword)) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/'
					})
				} else {
					console.log('username already taken')
				}  
            })   
            .catch(err => console.log(err));
        }
    };


	// handleSubmit(event) {
	// 	event.preventDefault()
	// 	console.log('sign-up handleSubmit, username: ')
	// 	console.log(this.state.userName)

	// 	//request to server to add a new username/password
	// 	axios.post('/api/signup', {
	// 		firstName: this.state.firstName,
	// 		lastName: this.state.lastName,
	// 		userName: this.state.userName,
	// 		email: this.state.email,
	// 		password: this.state.password,
	// 		confirmPassword: this.state.confirmPassword
	// 	})
	// 		.then(response => {
	// 			console.log(response)
	// 			if (!response.data.errmsg && (this.state.password === this.state.confirmPassword)) {
	// 				console.log('successful signup')
	// 				this.setState({ //redirect to login page
	// 					redirectTo: '/'
	// 				})
	// 			} else {
	// 				console.log('username already taken')
	// 			}
	// 		}).catch(error => {
	// 			console.log('signup error: ')
	// 			console.log(error)

	// 		})
	// }


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
                                group
                                type="password"
                                validate
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                        <MDBBtn color="primary">Sign Up</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>

{/* 					
					<Form className="form-horizontal">
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="firstname">First Name</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="lastName">Last Name</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									value={this.state.lastName}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="userName">Username</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="userName"
									name="userName"
									placeholder="Username (ie.CrazyRunnerDude)"
									value={this.state.userName}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="email">Email Address</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="email"
									name="email"
									placeholder="Email Address"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="password">Password: </Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									placeholder="password"
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="confirmPassword">Confirm Password: </Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									placeholder="Confirm Password"
									type="confirmPassword"
									name="confirmPassword"
									value={this.state.confirmPassword}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group ">
							<Col className="col-7">
							<Button
								className="btn btn-primary col-1 col-mr-auto"
								onClick={this.handleSubmit}
								type="submit"
							>Sign up</Button>
							</Col>
						</FormGroup>
					</Form> */}
				</div>

			)
		}
	}
}

export default Signup;
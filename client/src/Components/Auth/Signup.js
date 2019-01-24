import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col } from 'reactstrap';


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

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.userName)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/api/signup', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg && (this.state.password === this.state.confirmPassword)) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
			return (
				<div className="SignupForm">
					<h4>Sign up and GET OUTSIDE!</h4>
					<Form className="form-horizontal">
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="firstname">First Name</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="firstname"
									name="firstname"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="lastname">Last Name</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="lastname"
									name="lastname"
									placeholder="Last Name"
									value={this.state.lastName}
									onChange={this.handleChange}
								/>
							</Col>
						</FormGroup>
						<FormGroup className="form-group">
							<Col className="col-1 col-ml-auto">
								<Label className="form-label" htmlFor="username">Username</Label>
							</Col>
							<Col className="col-3 col-mr-auto">
								<Input className="form-input"
									type="text"
									id="username-signup"
									name="username-signup"
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
									placeholder="confirm password"
									type="password"
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
					</Form>
				</div>

			)
		}
	}
}

export default Signup;
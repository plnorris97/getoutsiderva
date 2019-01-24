import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Col } from 'reactstrap';


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
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
        event.preventDefault()
        // console.log('handleSubmit')

        axios
            .post('/api/signin', {
                userName: this.state.userName,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div>
                <Form className="form-horizontal">
                    <FormGroup className="form-group">
                        <Col className="col-1 col-ml-auto">
                            <Label className="form-label" htmlFor="username">User Name: </Label>
                        </Col>
                        <Col className="col-3 col-mr-auto">
                            <Input className="form-input"
                                type="text"
                                id="username-signin"
                                name="username-signin"
                                placeholder="User Name"
                                value={this.state.username}
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
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup className="form-group ">
                        <Col className="col-7">
                        <Button
                            className="btn btn-primary col-1 col-mr-auto"
                            onClick={this.handleSubmit}
                            type="submit">Login</Button>
                            </Col>
                    </FormGroup>
                </Form>
            </div>
            )
        }
    }
}

export default LoginForm;
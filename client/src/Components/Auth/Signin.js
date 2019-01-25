import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdbreact';
import { Redirect } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { Col } from 'reactstrap';
import API from '../../utils/Auth/API';


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            userName1: '',
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

    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')
        if (this.state.userName && this.state.password) {
            API.getUser({
                userName: this.state.userName,
                password: this.state.password
            })
            .then (res => {
                console.log('login response: ')
                console.log(res)
                if (res.status === 200) {
                    // update App.js state
                    this.props.checkAuth({
                        loggedIn: true,
                        userName: res.data.userName
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }     
            })   
            .catch(err => console.log(err));
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
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                        {/* <p className="h5 text-center mb-4">Sign In</p> */}
                        <div className="grey-text">
                        <MDBIcon icon="user" />
                            <MDBInput
                                label="User Name"
                                icon="user"
                                id="userName1"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                                value={this.state.userName}
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
                        <MDBBtn color="primary">Sign In</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
                
{/*                 
                
                <Form className="form-horizontal">
                    <FormGroup className="form-group">
                        <Col className="col-1 col-ml-auto">
                            <Label className="form-label" htmlFor="userName1">User Name: </Label>
                        </Col>
                        <Col className="col-3 col-mr-auto">
                            <Input className="form-input"
                                type="text"
                                id="userName1"
                                name="userName1"
                                placeholder="User Name"
                                value={this.state.userName}
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
                </Form> */}
            </div>
            )
        }
    }
}

export default LoginForm;
import React, { Component } from 'react';
import API from '../utils/API';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Hero from '../Components/Hero/Hero';
import ActivityGallery from '../Components/Gallery/ActivityGallery';
import { Input, TextArea, FormBtn } from '../Components/AddItems/AddActivity';

class ActivitiesLP extends Component {
    state = {
        // Search button holds the query parameters
        activities: [],
        name: '',
        description: ''
    };
    
    componentDidMount() {
        // look up activities when the page loads
        this.loadActivities();
    }

    loadActivities = () => {
        API.getActivities()
            .then(res => {
                console.log(res.data)
                this.setState({ activities: res.data, name: "", description: "" })
            })
            .catch(err => console.log(err))
    };

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({
            [id]: value
        })
        console.log(event.target.id)
    };

    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')
        if (this.state.name && this.state.description) {
            API.addActivity({
                id: this.state.id,
                name: this.state.name,
                description: this.state.description
            })
            .then (res => this.loadActivities())
            .catch(err => console.log(err))
        }
        console.log("it worked");
    };

    addActivity = (id) => {
        API.addActivity(id)
            .then(res => {
                this.loadActivities()
                // console.log(res)
                // this.setState({ activities: res.data})
            }) 
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
            <Hero />
            <MDBContainer>
                <MDBRow lg="3" md="6" className="mt-3">  
                    {this.state.activities.length ? (
                            this.state.activities.map(activities => (
                                <MDBCol md="3">
                                <ActivityGallery 
                                    key={activities._id}
                                    img={activities.img}
                                    name={activities.name}
                                    activities={activities.name.split(" ").join("-").toLowerCase("")}
                                /> 
                                </MDBCol>   
                            ))    
                    ) : (
                    <p>Oops we don't have data! </p>   
                    )}                    
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <hr />
                <br />
                <MDBRow>
                    <MDBCol md="3" style={{ textAlign: "center" }}>
                        <h5>Don't see an activity listed here?</h5>
                        <h5>Add it now!</h5>
                    </MDBCol>
                    <MDBCol md="9">
                        <form>
                            <div className="grey-text">
                            <Input
                                placeholder="Activity Name (required)"
                                id="activity"
                                value={this.state.activity}
                                onChange={this.handleChange}
                            />
                            <TextArea
                                placeholder="Activity Description (required)"
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

export default ActivitiesLP;


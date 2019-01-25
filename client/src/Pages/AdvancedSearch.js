import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
// import { DropDown, FormBtn } from "../Components/Form/Form";


class Search extends Component {
    state = {
      // Include all form fields 
      destination: [],
      activities: [],
      results: []
    }
    componentDidMount() {
        // look up parks when the page loads
        this.loadForm();
    }

    loadForm = () => {
        API.getSearch()
            .then(res =>
            this.setState({})
                )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        // const { name, value } = event.target;
        this.setState({
          value: event.target.value
        });
    };
    
      
      handleSelectorSubmit = event => {
        event.preventDefault();
        if (this.state.value2) {
          API.searchDB({
            //   need to define PARKS & ATTRACTIONS
            //  need to define ACTIVITIES
            name: this.state.name
            
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };

      handleCheckedSubmit = event => {
          event.preventDefault();

      }

    render() {
        return (
            <Container>
                <Row>
                    <Col>Advanced Search</Col>
            </Row>
            <Row>
            </Row>
            <Row>
                <Col>
                <form on submit={this.handleFormSubmit}>
                <label>
                    Where do you want to go?
                    <select value1={this.state.value} onChange={this.handleChange}>
                        <option value="parks">Parks</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </label>
                </form>
                </Col>
                <Col>
                <form on submit={this.handleSelectorSubmit}>
                <label>
                    What do you want to do?
                    <select multiple={true} value2={this.state.value} onChange={this.handleChange}>
                        <option value="biking">Biking</option>
                        <option value="birding-wildlife">Birding/Wildlife</option>
                        <option value="camping">Camping</option>
                        <option value="disc-golf">disc-golf</option>
                        <option value="exercise-trail">Exercise Trail</option>
                        <option value="fishing">Fishing</option>
                        <option value="geocaching">Geocaching</option>
                        <option value="hiking">Hiking</option>
                        <option value="paddle-sports">Paddle Sports</option>
                        <option value="running">Running</option>
                        <option value="skateboarding">Skateboarding</option>
                        <option value="swimming">Swimming</option>
                    </select>
                </label>
                </form>
                </Col>
            </Row>
            <Row>
                
                <Col xs="6" sm="4"><form on submit={this.handleCheckedSubmit}>
                <label>
                What amenities do you need?
                <input
                    name="amphitheatre"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleInputChange} />
                <br />    
                <input
                    name="ball-fields"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="boat-ramp"
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="history"
                    type="checkbox"
                    checked={this.state.history}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="nature/visitor-center"
                    type="checkbox"
                    checked={this.state.visitorCenter}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="parking-lot"
                    type="checkbox"
                    checked={this.state.parkingLot}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="playground"
                    type="checkbox"
                    checked={this.state.playground}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="restrooms"
                    type="checkbox"
                    checked={this.state.restrooms}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="river/lake"
                    type="checkbox"
                    checked={this.state.riverLake}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="shelters/picnic-area"
                    type="checkbox"
                    checked={this.state.shelterPicnicArea}
                    onChange={this.handleInputChange} />
                <br />
                <input
                    name="swimming-pool"
                    type="checkbox"
                    checked={this.state.swimmingPool}
                    onChange={this.handleInputChange} />
                <br />
                </label>
                </form>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
            </Row>
            <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            </Row>
            </Container>
        );
    }
}

export default Search;
import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './style.css';

class SearchForm extends React.Component {
      render() {
        return(
        <Form>
            <Row>
            <Col md="4" className="leftCol">
            <FormGroup on submit={this.handleFormSubmit}>
                <Label className="label"><h4>Where do you want to go?</h4></Label>
                <Input type="select" name="selectWhere" value1={this.state.value} onChange={this.handleChange}>
                    <option value="parks">Parks</option>
                    <option value="attractions">Attractions</option>
                </Input>
            </FormGroup>
            </Col>
            <Col md="4" className="middleCol">
            <FormGroup on submit={this.handleSelectorSubmit}>
                <Label className="label"><h4>What do you want to do?</h4></Label>
                    <Input type="select" name="selectWhat" multiple={true} value2={this.state.value} onChange={this.handleChange}>
                        <option value="biking">Biking</option>
                        <option value="birding-wildlife">Birding/Wildlife</option>
                        <option value="camping">Camping</option>
                        <option value="disc-golf">Disc Golf</option>
                        <option value="exercise-trail">Exercise Trail</option>
                        <option value="fishing">Fishing</option>
                        <option value="geocaching">Geocaching</option>
                        <option value="hiking">Hiking</option>
                        <option value="paddle-sports">Paddle Sports</option>
                        <option value="running">Running</option>
                        <option value="skateboarding">Skateboarding</option>
                        <option value="swimming">Swimming</option>
                    </Input>
                    <p>Select multiple activities using the Ctrl key.</p>
            </FormGroup>
            </Col>
            <Col md="4" className="rightCol">
            <FormGroup on Submit={this.handleCheckedSubmit}>
                <Label className="label"><h4>What amenities do you need?</h4></Label>
                    <Input
                        name="amphitheatre"
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleInputChange} />
                        Amphitheatre
                    <br />
                    <Input
                        name="ball-fields"
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleInputChange} />
                        Ball Fields
                    <br />
                    <Input
                        name="boat-ramp"
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleInputChange} />
                        Boat Ramp
                    <br />
                    <Input
                        name="history"
                        type="checkbox"
                        checked={this.state.history}
                        onChange={this.handleInputChange} />
                        History
                    <br />
                    <Input
                        name="nature/visitor-center"
                        type="checkbox"
                        checked={this.state.visitorCenter}
                        onChange={this.handleInputChange} />
                        Nature/Visitor Center
                    <br />
                    <Input
                        name="parking-lot"
                        type="checkbox"
                        checked={this.state.parkingLot}
                        onChange={this.handleInputChange} />
                        Parking Lot
                    <br />
                    <Input
                        name="playground"
                        type="checkbox"
                        checked={this.state.playground}
                        onChange={this.handleInputChange} />
                        Playground
                    <br />
                    <Input
                        name="restrooms"
                        type="checkbox"
                        checked={this.state.restrooms}
                        onChange={this.handleInputChange} />
                        Restrooms
                    <br />
                    <Input
                        name="river/lake"
                        type="checkbox"
                        checked={this.state.riverLake}
                        onChange={this.handleInputChange} />
                        River/Lake
                    <br />
                    <Input
                        name="shelters/picnic-area"
                        type="checkbox"
                        checked={this.state.shelterPicnicArea}
                        onChange={this.handleInputChange} />
                        Shelters/Picnic Areas
                    <br />
                    <Input
                        name="swimming-pool"
                        type="checkbox"
                        checked={this.state.swimmingPool}
                        onChange={this.handleInputChange} />
                        Swimming Pool
                    <br />
            </FormGroup>
            </Col>
            </Row>
        </Form>
        );
    }
}

export default SearchForm;
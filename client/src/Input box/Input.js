import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Col,
  Row,
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }


  render() {
    return (
      <div>
        <style>
        {
            `.InputGroup, Input {
                margin-left: 1rem;
            }
            Button {
                margin-left: 1rem;
            }`

        }
        </style>

        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>        
                <InputGroup>
                <Input placeholder="How do YOU do RVA?" />
                <InputGroupAddon addonType="append"><Button className="rounded mb-0" color="warning">Let's GO!</Button></InputGroupAddon>
                </InputGroup>
            </Col>
        </Row>

      </div>
    );
  }
}


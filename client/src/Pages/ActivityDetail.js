// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import SearchBtn from "../Components/SearchBtn/SearchBtn"
import ResultsWrapper from "../Components/ResultsWrapper/ResultsWrapper"
import { readSync } from "fs";
// import BannerImage from '../Components/BannerImage/BannerImage'
import Cards from '../Components/Cards/Cards'
import {Container, Row, Col} from 'reactstrap';

class ActivityDetail extends Component {
    state = {
      name: "",
      park: []
    }

    componentDidMount(name) {
        // shows activity name in banner image
        // this.searchDB() pass in name to call to db ; werite a query to call all of the info
    }

    showName = (name) => {
      API.getActivity(name)
      .then(res =>
        this.setState({results: res.data})
      )
      .catch(err => console.log(err))
    }

    // Look up parks
    loadParks() {
        API.getCountyParks()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }  
    
    searchDB = event => {
      event.preventDefault();
      // const query = this.state.search.replace(/ /g, "+");
      // let path = "/parks/county?q=" + query
      // console.log(path);
      API.getParks(this.props.match.params.name)
      .then(res =>
        this.setState({park: res.data})
      )
    }

  render(props) {
    return (
      <Container>
        <Row>
        {/* <BannerImage path={this.props.match.params.name} />         */}
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>{this.showName()}</Col>
        </Row>
        <Row>
          {/* <Col>.col</Col> */}
          <Col>
            <SearchBtn onClick={this.searchDB}>
              Find parks
            </SearchBtn>
          </Col>
        </Row>
        <Row>
            {this.state.park.length ? (
              this.state.park.map(park => (
                <ResultsWrapper className="card-result"
                park = {park}
                />
            ))
          ):(
            <Col className="results" sm="12" md={{size:6, offset:3}}>
            <h3>You should see results here.</h3>
            </Col>
          )}
        </Row>
      </Container>

        );
    }
}
export default ActivityDetail;
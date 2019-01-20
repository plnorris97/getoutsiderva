import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import SearchBtn from "../Components/SearchBtn/SearchBtn"
<<<<<<< HEAD:client/src/Pages/ActivityDetail.js
import ResultsWrapper from "../Components/ResultsWrapper/ResultsWrapper"
import { readSync } from "fs";
// import BannerImage from '../Components/BannerImage/BannerImage'
=======
import Cards from '../Components/Cards/Cards'
>>>>>>> master:client/src/Pages/Detail.js

class ActivityDetail extends Component {
    state = {
<<<<<<< HEAD:client/src/Pages/ActivityDetail.js
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
=======
      // Search button holds the query parameters
      results: []
    }
    componentDidMount() {
        // look up parks when the page loads
        this.loadParks();
>>>>>>> master:client/src/Pages/Detail.js
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

<<<<<<< HEAD:client/src/Pages/ActivityDetail.js
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
          {/* <Col>.col</Col>
          <Col>.col</Col> */}
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
=======
  render() {
    return (

      <Router>
        <div className="Detail">
        <SearchBtn onClick={this.searchDB}>
              Find parks
        </SearchBtn>
      
      <Cards />
        </div>
      </Router>

>>>>>>> master:client/src/Pages/Detail.js

        );
    }
}
export default ActivityDetail;
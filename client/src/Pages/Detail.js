import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import SearchBtn from "../Components/SearchBtn/SearchBtn"
import Cards from '../Components/Cards/Cards'

class Detail extends Component {
    state = {
      // Search button holds the query parameters
      results: []
    }
    componentDidMount() {
        // look up parks when the page loads
        this.loadParks();
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
      API.getCountyParks()
        .then(res => {
        console.log(res);
      })
    }

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


        );
    }
}
export default Detail;
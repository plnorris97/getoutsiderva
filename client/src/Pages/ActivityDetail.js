// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import SearchBtn from "../Components/SearchBtn/SearchBtn"
import ResultsWrapper from "../Components/ResultsWrapper/ResultsWrapper";
// import Cards from '../Components/Cards/Cards'
import Hero from '../Components/Hero/Hero';
import {Container, Row, Col} from 'reactstrap';
import Cards from '../Components/Cards/Cards';

class ActivityDetail extends Component {
    state = {
      name: "",
      park: []
    }

    componentDidMount() {
        // shows activity name in banner image
        // this.searchDB() pass in name to call to db ; werite a query to call all of the info
        this.loadParks();
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
      <div>
        <Hero />

       
            <SearchBtn onClick={this.searchDB}>
              Find parks
            </SearchBtn>
         
       

      <Cards />
       </div>
    

        );
    }
}
export default ActivityDetail;
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Cards from '../Components/Cards/Cards'
import React, { Component } from "react";
import API from "../utils/API";
import Hero from '../Components/Hero/Hero';
import { Row } from 'reactstrap';
import Cards from '../Components/Cards/ActivityCards';

const parseStr = (str) => {
  let newStr = str.replace(/-/g, ' ')
  let strArr = newStr.split(' ');
  let newArr = []
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
  }
  let finishedStr = newArr.join(' ');
  return finishedStr;
}

class ActivityDetail extends Component {
     state = {
        // Do I need a path(name) state?
        activity: '',
        description: '',
        parks: []
      }
  

    componentDidMount() {
        // this.showName();
        const parsedName = parseStr(this.props.match.params.name)
        // const path = this.props.match.params.name
        console.log(parsedName);
        this.lookUpParks(parsedName);
        this.lookUpActivity(parsedName);
    }

    

    // showName = () => {
    //   API.getActivity()
    //   console.log("hello")
    //   .then(res =>
    //     this.setState({results: res.data})
    //   )
    //   .catch(err => console.log(err))
    // }

    // map through activities for descriptions
    lookUpActivity(description) {
      API.getActivity(description)
      .then(res => 
        this.setState({ activity: res.data.parsedName, description: res.data.description })
      )
      .catch(err => console.log(err));
      console.log(description);
    };
    

    // Look up parks
    lookUpParks(Activity) {
        API.getParks()
          // if parks have activities = path grab them
          .then(res => {
            const myParks = [];
            res.data.forEach(park => {
              if(park.Activities.includes(Activity)) {
                myParks.push(park)
              } 
            });
            console.log(myParks);
            this.setState({ parks: myParks })
        })
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

  render() {
    return (

      <div>
        <Hero></Hero> 
        {/* <Row name={this.props.match.params.name} text={this.props.match.params.description} /> */}
        <Row><h1>{this.props.match.params.name}</h1></Row>
        <Row><h5 style={{position: 'absolute', right: 20}}><a href="/activities">Select Another Activity</a></h5></Row>
        <Row><h4>{this.props.match.params.description}</h4></Row>
        <Row className="mt-6">
            {this.state.parks.length ? (
                    this.state.parks.map(parks => (
                    <Cards
                      key={parks._id}
                      name={parks.Name}
                      address={parks.Address}
                      city={parks.City}
                      description={parks.Description}
                  />
                    ))
               
            ) : (
                <p>There aren't any current parks for your activity.</p>   
            )} 
        </Row>

      </div>

        );
    }
}
export default ActivityDetail;



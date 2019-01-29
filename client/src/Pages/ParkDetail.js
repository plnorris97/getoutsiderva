// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import Hero from '../Components/Hero/Hero';
import { Row } from 'reactstrap';
import Cards from '../Components/Cards/ParkCards'

const parseStr = (str) => {
  let newStr = str.replace(/-/g,' ')
  let strArr = newStr.split(' ');
  let newArr = []
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
  }
  let finishedStr = newArr.join(' ');
  return finishedStr;
}

  // let finishedStr = newArr.join(' ');
  // return finishedStr;
  // if (str==="belleisle"){
  //   return "Belle Isle";
  // }

class ParkDetail extends Component {
     state = {
        // Do I need a path(name) state?
        path: '',
        activities: []
      }
  

    componentDidMount() {
        // this.showName();
        const parsedName = parseStr(this.props.match.params.name)
        this.lookUpActivities(parsedName);
    }

    // showName = () => {
    //   API.getActivity()
    //   console.log("hello")
    //   .then(res =>
    //     this.setState({results: res.data})
    //   )
    //   .catch(err => console.log(err))
    // }

    lookUpActivities(park) {
      API.getActivities()
        // if parks have activities = path grab them
        .then(res => {
          console.log(res);
          const myActivities = [];
          res.data.forEach(activity => {
            console.log(activity);
            if(activity.parks.includes(park)) {
              myActivities.push(activity)
            }
          });
          this.setState({ activities: myActivities })
      })
      .catch(err => console.log(err))
   }  

    // searchDB = event => {
    //   event.preventDefault();
    //   API.getActivities(this.props.match.params.name)
    //   .then(res =>
    //     this.setState({activities: res.data})
    //     )
    // }

  render(props) {
    return (
  
    <div>
        <Hero />
        <Row><h5 style={{position: 'absolute', right: 20}}><a href="/parks">Select Another Park</a></h5></Row>
        <Row className="mt-6">  
        {this.state.activities.length ? (
                this.state.activities.map(activities => (
                  
                    <Cards 
                        key={activities._id}
                        img={activities.img}
                        name={activities.name}
                        description={activities.description}
                    /> 
                  
                ))    
        ) : (
        <p>no data</p>   
        )}                    
    </Row>
   


    </div>

        );
    }
}
export default ParkDetail;
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
import Hero from '../Components/Hero/Hero';
import { Row} from 'reactstrap';
import Cards from '../Components/Cards/ParkCards'

const parseStr = (str) => {
  let newStr=str.split("-").join(" ");
  return newStr;
  
}

class ParkDetail extends Component {
     state = {
        // Do I need a path(name) state?
        path: '',
        activities: []
      }
  

    componentDidMount() {
        // this.showName();
        const parsedName = parseStr(this.props.match.params.name)
        console.log("parsedName" + parsedName);
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
          console.log("myActivities");
          console.log(myActivities);
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
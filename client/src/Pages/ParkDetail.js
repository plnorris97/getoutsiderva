// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
// import ResultsWrapper from "../Components/ResultsWrapper/ResultsWrapper";
import Cards from '../Components/Cards/Cards'
import Hero from '../Components/Hero/Hero';
import {Container, Row, Col} from 'reactstrap';
import { Card, CardBody, CardTitle } from 'reactstrap';

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

class ParkDetail extends Component {
     state = {
        // Do I need a path(name) state?
        path: '',
        activities: []
      }
  

    componentDidMount() {
        // this.showName();
        const parsedName = parseStr(this.props.match.params.name)
        console.log(parsedName);
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
          console.log(myActivities);
          this.setState({ activities: myActivities })
      })
      .catch(err => console.log(err))
   }  

    // Look up parks
    // lookUpActivities() {
    //     API.getActivities()
    //       // if parks have activities = path grab them
    //       .then(res => {
    //         console.log(res);
    //         this.setState({ activities: res.data })
    //     })
    //     .catch(err => console.log(err))
    //  }  

  render(props) {
    return (
      <Container>
        <Row>
        <Hero />
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <Row>
        <Col>
            {this.state.activities.length ? (
                <Cards>
                    {this.state.activities.map(activity => (
                    <CardBody key={activity._id}>
                        <CardTitle>{activity.name}</CardTitle>
                        {/* <CardText>{activity.parks}</CardText> */}
                    </CardBody>
                    ))}
                </Cards>
            ) : (
                <p>There aren't any current activities available at this park.</p>   
            )}
            </Col> 
        </Row>
        <Row>
      
        </Row>
      </Container>

        );
    }
}
export default ParkDetail;
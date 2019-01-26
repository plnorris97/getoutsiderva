// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "../utils/API";
// import ResultsWrapper from "../Components/ResultsWrapper/ResultsWrapper";
// import Cards from '../Components/Cards/Cards'
import Hero from '../Components/Hero/Hero';
import {Container, Row, Col} from 'reactstrap';
import Cards from '../Components/Cards/Cards';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';

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
        path: '',
        parks: []
      }
  

    componentDidMount() {
        // this.showName();
        

        const parsedName = parseStr(this.props.match.params.name)
        // const path = this.props.match.params.name
        console.log(parsedName);
        this.lookUpParks(parsedName);
    }

    

    // showName = () => {
    //   API.getActivity()
    //   console.log("hello")
    //   .then(res =>
    //     this.setState({results: res.data})
    //   )
    //   .catch(err => console.log(err))
    // }

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

  render(props) {
    return (
      <div>
        <Hero />
       
        <Row>
          <Col></Col>
        </Row>
        <Row>
        <Col>
            {this.state.parks.length ? (
                <Card>
                    {this.state.parks.map(parks => (
                    <CardBody key={parks._id}>
                        <CardTitle>{parks.Name}</CardTitle>
                        <CardText>{parks.Description}</CardText>
                        <CardText>{parks.Activities}</CardText>
                    </CardBody>
                    ))}
                </Card>
            ) : (
                <p>There aren't any current parks for your activity.</p>   
            )}
            </Col> 
        </Row>
      </div>

        );
    }
}
export default ActivityDetail;


{/* <div>
<Hero />
    <Row className="mt-3">  
        {this.state.activities.length ? (
                this.state.activities.map(activities => (
                    <Col md="3">
                    <Cards 
                        key={activities._id}
                        img={activities.img}
                        name={activities.name}
                        // parks={activities.parks}
                    /> 
                    </Col> 
                ))    
        ) : (
        <p>no data</p>   
        )}                    
    </Row>
</div> */}
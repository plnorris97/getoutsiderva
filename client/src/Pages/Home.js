
import React, { Component } from 'react';
import { MDBRow } from "mdbreact";

// import './App.css';
import Carousel from '../Components/Carousel/Carousel';
// import Input from '../Components/InputBox/Input';
import Gallery from '../Components/Gallery/Gallery';
// import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Video from '../Components/Video/Video';
import Input from '../Components/InputBox/Input';
import Developer from '../Components/Developers/Developers';


class Home extends Component {
    state = {
      // Search button holds the query parameters
        Search: ""

    }
    // componentDidMount() {
    //     // look up activities when the page loads
    //     this.loadActivities();
    // }
    render() {
        return (
        <div>
            <Carousel />
          
          <MDBRow>
            <Input />
          </MDBRow>
          <MDBRow>
            <Gallery />
          </MDBRow> 
          <MDBRow>
            <Video />
          </MDBRow>   
          <MDBRow>
              <Developer />
          </MDBRow>

        </div>
        )
    }
}

export default Home;
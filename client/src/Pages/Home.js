
import React, { Component } from 'react';
// import './App.css';
import Carousel from '../Components/Carousel/Carousel';
// import Input from '../Components/InputBox/Input';
import Gallery from '../Components/Gallery/Gallery';
// import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Video from '../Components/Video/Video';
import Input from '../Components/InputBox/Input';


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
            <br />
            {/* <Input /> */}
            <Input />
            <br />
            <Gallery />
            <br />
            <Video />
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Home;
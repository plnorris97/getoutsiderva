
import React, { Component } from 'react';
// import './App.css';
import Carousel from '../Components/Carousel/Carousel';
import Input from '../Components/InputBox/Input';
import ColGallery from '../Components/ColGallery/ColGallery';
// import Jumbotron from '../Components/Jumbotron/Jumbotron';
import Video from '../Components/Video/Video';


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
            <Input />
            <br />
            <ColGallery />
            <br />
            <Video />
            <br />
            {/* <Jumbotron /> */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Home;
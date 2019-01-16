
import React, { Component } from 'react';
// import './App.css';
import Carousel from '../Components/Carousel/Carousel';
import Input from '../Components/InputBox/Input';
import ColGallery from '../Components/ColGallery/ColGallery';

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
        </div>
        )
    }
}

export default Home;
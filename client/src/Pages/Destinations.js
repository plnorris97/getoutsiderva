// ******* This is the landing page for Parks to include all parks *********

import React, { Component } from 'react';
// import './App.css';
// import API from '../utils/API';
import {LPCollection} from '../Components/LPCollection/LPCollection';
// need banner/hero image component here.
// import BannerImage from '../Components/BannerImage/BannerImage';
import LazyHero from 'react-lazy-hero/lib/LazyHero';


class ParksLP extends Component {
    state = {
      // Search button holds the query parameters
        Activities: []

    }
    componentDidMount() {
        // look up activities when the page loads
//        this.loadActivities();
    }

    // loadParks() {
    //     API.getActivities()
    //     .then(res =>
    //         this.setState({results: res.data})
    //       )
    //       .catch(err => console.log(err))
    // }

    render() {
        return (
        <div>
            <LazyHero />
            <LPCollection />
        </div>
        )
    }
}

export default ParksLP;
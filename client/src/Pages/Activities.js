// ******* This is the landing page for Activities to include all activities available *********

import React, { Component } from 'react';
// import './App.css';
import API from '../utils/API';
// need banner/hero image component here.


class ActivitiesLP extends Component {
    state = {
      // Search button holds the query parameters
        Activities: []

    }
    componentDidMount() {
        // look up activities when the page loads
        this.loadActivities();
    }

    loadActivities() {
        API.getActivities()
        .then(res =>
            this.setState({results: res.data})
          )
          .catch(err => console.log(err))
    }

    render() {
        return (
        <div>

        </div>
        )
    }
}

export default ActivitiesLP;
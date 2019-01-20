import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home';
// import Activities from './Pages/Activities';
// this is the detail page for both activity or county park location (pulls from the db)
import ActivityDetail from './Pages/ActivityDetail';
// this is the static destination landing page with hard coded info
import ParksLP from './Pages/Destinations';
// this is the static county parks landing page with hard coded info
import ParkDetail from './Pages/ParkDetail';
// this is a static state parks landing page with hard coded info
// import stateParks from './Pages/stateParks';
// import NoMatch from './Pages/NoMatch';
import Search from './Pages/AdvancedSearch';
import ActivitiesLP from "./Pages/Activities";



class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/activities" component={ActivitiesLP} />
            <Route exact path="/activities/:name" component={ActivityDetail} />
            <Route exact path="/destinations" component={ParksLP} />
            <Route exact path="/parks/:name" component={ParkDetail} />
            {/* <Route exact path="/destinations/parks/county" component={countyParks} /> */}
            {/* <Route exact path="/destinations/parks/state" component={stateParks} /> */}
            <Route exact path="/advanced-search" component={Search} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>


    );
  }
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import Home from './Pages/Home';
// this is the activity landing page with hard coded info
// import Activities from './Pages/Activities';
// this is the detail page for both activity or county park location (pulls from the db)
import Detail from './Pages/Detail';
// this is the static destination landing page with hard coded info
// import Destinations from './Pages/Destinations';
// this is the static county parks landing page with hard coded info
// import countyParks from './Pages/countyParks';
// this is a static state parks landing page with hard coded info
// import stateParks from './Pages/stateParks';
// import NoMatch from './Pages/NoMatch';


class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/activities" component={Activities} /> */}
            <Route exact path="/activities/:name" component={Detail} />
            {/* <Route exact path="/destinations" component={Destinations} /> */}
            {/* <Route exact path="/destinations/parks/county" component={countyParks} /> */}
            {/* <Route exact path="/destinations/parks/state" component={stateParks} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>


    );
  }
}

export default App;

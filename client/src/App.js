import { Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Navbar from './Components/Nav/Nav2'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import ActivitiesLP from "./Pages/ActivitiesLP";
import ActivityDetail from './Pages/ActivityDetail';
import ParksLP from './Pages/ParksLP';
import ParkDetail from './Pages/ParkDetail';
import NoMatch from './Pages/NoMatch';
import Search from './Pages/AdvancedSearch';
import HomeAuth from './Components/Auth/Home';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/activities" component={ActivitiesLP} />
            <Route exact path="/activities/:name" component={ActivityDetail} />
            <Route exact path="/destinations" component={ParksLP} />
            <Route exact path="/parks/:name" component={ParkDetail} />
            <Route exact path="/advanced-search" component={Search} />
            <Route exact path="/auth" component={HomeAuth} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;

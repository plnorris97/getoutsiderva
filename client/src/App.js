import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Nav from './Nav/Nav';
import Carousel from './Carousel/Carousel';
import Input from './Input box/Input';
import ColGallery from './ColGallery/ColGallery';
import Video from './Video/Video';
import Footer from './Footer/Footer';
import Jumbotron from './Jumbotron/Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel />
        <br />
        <Input />
        <br />
        <ColGallery />
        <br />
        <Video />
        <br />
        <Jumbotron />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  }
}

export default App;

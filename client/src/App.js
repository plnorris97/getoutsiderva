import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Carousel from './Carousel/Carousel';
import Input from './Input box/Input';
import ColGallery from './ColGallery/ColGallery';

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
      </div>
    );
  }
}

export default App;

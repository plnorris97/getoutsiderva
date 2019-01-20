import React, { Component } from "react";

class Hero extends Component {
    
  render(props) {
    return (
      <div>
         <p>{this.props.name}</p>
            <img src={require(`../../images/${this.props.path}.jpg`)} alt="nothing"/>
            {/* <img src={require(`../../images/biking1.jpg`)} /> */}
      </div>
    );
  }
}

export default Hero;
import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

class Hero extends Component {
    render(props) {
        return (
            <div>
                <LazyHero opacity={0.2} minHeight="60vh" isCentered={true} src="http://orogoldstorelocator.com/wp-content/uploads/2016/08/OROGOLD-Popular-German-Outdoor-Activities-Cycling.jpg" parallaxOffset={3} >
                <div className="hero-text">
                    {/* <h1>{this.props.path.name}</h1> */}
                    <h1>RVA Activities</h1>
                    {/* <h4>Whether you are into extreme sports and adrenaline rushes or leisure bike ride along the history James River, Richmond has an activity for you.</h4> */}
                </div>
                </LazyHero>
            </div>
        )}
}

// {require(`../../images/${this.props.name}.jpg`)}
export default Hero;



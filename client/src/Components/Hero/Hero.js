import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

class Hero extends Component {
    render(props) {
        return (
            <div>
                <LazyHero opacity="0.2" color="orange" minHeight="70vh" isCentered={true} imageSrc='https://www.panoramaresort.com/assets/Tourism-Operators/images/_resampled/CroppedFocusedImageWzE4MDAsMTA4MCwieCIsMjE1XQ/1-stephennn-7394.JPG' parallaxOffset={2} >
                <div className="hero-text">
                    <h1>{this.props.path}</h1>
                    <h1>RVA Activities</h1>
                    {/* <h4>Whether you are into extreme sports and adrenaline rushes or leisure bike ride along the history James River, Richmond has an activity for you.</h4> */}
                </div>
                </LazyHero>
            </div>
        )}
}

// {require(`../../images/${this.props.name}.jpg`)}
export default Hero;



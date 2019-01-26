import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
// import activitiesImg from '../../images';

class Hero extends Component {
    renderSwitch(path) {
        switch(path) {
            case '/activities':
                return require('../../images/activities.jpg');
            case '/destinations':
                return require('../../images/virginia13.jpg');
            case '/advanced-search':
                return require('../../images/search.jpg');
            case '/auth':
                return require('../../images/login.jpg');
            default: return 'image.jpg';
        }
    }

    render(props) {
        return (
            <div>
                <LazyHero opacity={0.2} minHeight="60vh" isCentered={true} imageSrc={this.renderSwitch(window.location.pathname)} parallaxOffset={3} >
                <div className="hero-text" headerInfo={this.renderSwitch(window.location.name)}>
                    <h1>RVA {this.pathname} </h1>
                    <h4>Whether you are into extreme sports and adrenaline rushes or leisure bike ride along the history James River, Richmond has an activity for you.</h4>
                </div>
                </LazyHero>
            </div>
        )}
}

export default Hero;



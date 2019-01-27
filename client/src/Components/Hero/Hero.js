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
            case '/activities/biking':
                return require('../../images/biking.jpg');
            case '/activities/hiking':
                return require('../../images/hiking.jpg');
            case '/activities/disc-golf':
                return require('../../images/discGolf.jpg');
            case '/activities/fishing':
                return require('../../images/fishing.jpg');
            case '/activities/running':
                return require('../../images/running.jpg');
            case '/activities/swimming':
                return require('../../images/swimming.jpg');
            case '/activities/exercise-trail':
                return require('../../images/exerciseTrail.jpg');
            case '/activities/camping':
                return require('../../images/camping.jpg');
            // case '/activities/birding-wildlife':
            //     return require('../../images/birdingWildlife.jpg');
            case '/parks/dutch-gap-conservation-area':
                return require('../../images/dutch-gap-conservation-area.jpg');
            // case '/parks/maymont':
                // return require('../../images/maymont.jpg');
            case '/parks/henricus-historical-park':
                return require('../../images/henricus-historical-park.jpg');
            case '/parks/huguenot-park':
                return require('../../images/huguenot-park.jpg');
            case '/parks/harry-g-daniel-park-at-iron-bridge':
                return require('../../images/harry-g-daniel-park-at-iron-bridge.jpg');
            case '/parks/pocahontas-state-park':
                return require('../../images/pocahontas-state-park.jpg');
            case '/parks/r-garland-dodd-park-at-iron-bridge':
                return require('../../images/r-garland-dodd-park-at-iron-bridge.jpg');
            case '/parks/presquile-national-wildlife-refuge':
                return require('../../images/presquile-national-wildlife-refuge.jpg');
            // case '/parks/robious-landing-park':
            //     return require('../../images/robious-landing-park.jpg');
            // case '/parks/rockwood-park':
            //     return require('../../images/rockwood-park.jpg');
            case '/parks/cheswick-park':
                return require('../../images/cheswick-park.jpg');
            case '/parks/deep-bottom-park-and-four-mile-creek':
                return require('../../images/deep-bottom-park-and-four-mile-creek.jpg');
            case '/parks/deep-run-park-and-recreation-center':
                return require('../../images/deep-run-park-and-recreation-center.jpg');
            case '/parks/dorey-park-and-recreation-center':
                return require('../../images/dorey-park-and-recreation-center.jpg');
            case '/parks/dunncroft-castle-point-park':
                return require('../../images/dunncroft-castle-point-park.jpg');
            case '/parks/echo-lake-park':
                return require('../../images/echo-lake-park.jpg'); 
            case '/parks/chimborazo-park':
                return require('../../images/chimborazo-park.jpg');
            case '/parks/byrd-park':
                return require('../../images/byrd-park.jpg');
            case '/parks/bryan-park':
                return require('../../images/bryan-park.jpg');
            case '/parks/belle-isle':
                return require('../../images/belle-isle.jpg');
            case '/parks/14th-street-takeout':
                return require('../../images/14th-street-takeout.jpg');
            case '/parks/hunton-community-center-and-park':
                return require('../../images/hunton-community-center-and-park.jpg');
            case '/parks/laurel-recreation-area-and-skate-park':
                return require('../../images/laurel-recreation-area-and-skate-park.jpg');
            case '/parks/meadow-farm-museum-at-crump-park':
                return require('../../images/meadow-farm-museum-at-crump-park.jpg');
            case '/parks/northbank-trail-texas-beach':
                return require('../../images/northbank-trail-texas-beach.jpg');
                case '/parks/osborne-park-and-boat-landing':
                return require('../../images/osborne-park-and-boat-landing.jpg');
                case '/parks/rf-and-p-park':
                return require('../../images/rf-and-p-park.jpg');
                case '/parks/shiplock-park':
                return require('../../images/shiplock-park.jpg');
                case '/parks/short-pump-park':
                return require('../../images/short-pump-park.jpg');
                case '/parks/springfield-park':
                return require('../../images/springfield-park.jpg');
                case '/parks/three-lakes-park-and-nature-center':
                return require('../../images/three-lakes-park-and-nature-center.jpg');
                case '/parks/tredegar-street-put-in.jpg':
                return require('../../images/tredegar-street-put-in.jpg');
                case '/parks/tuckahoe-creek-park':
                return require('../../images/tuckahoe-creek-park.jpg');
                case '/parks/twin-hickory-park-and-recreation-center':
                return require('../../images/twin-hickory-park-and-recreation-center.jpg');
                case '/parks/varina-recreation-area':
                return require('../../images/varina-recreation-area.jpg');
                case '/parks/virginia-randolph-recreation-area':
                return require('../../images/virginia-randolph-recreation-area.jpg');   
            default: return 'image.jpg';
        }
    }

    render() {
        return (
            <div>
                <LazyHero opacity={0.2} minHeight="60vh" isCentered={true} imageSrc={this.renderSwitch(window.location.pathname)} parallaxOffset={3} >
                <div className="hero-text" headerInfo={this.renderSwitch(window.location.name)}>
                    {/* <h1>Hi{this.match.path}</h1> */}
                    {/* <h4>Whether you are into extreme sports and adrenaline rushes or leisure bike ride along the history James River, Richmond has an activity for you.</h4> */}
                </div>
                </LazyHero>
            </div>
        )}
}

export default Hero;



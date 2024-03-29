import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
// import activitiesImg from '../../images';

// const parseStr = (str) => {
//     let newStr = str.replace(/-/g, ' ')
//     let strArr = newStr.split(' ');
//     let newArr = []
//     for (let i = 0; i < strArr.length; i++) {
//       newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
//     }
//     let finishedStr = newArr.join(' ');
//     return finishedStr;
//   }

class Hero extends Component {
    // componentDidMount() {
    //     const parsedName = parseStr(this.props.match.params.name);
    //     console.log(parsedName)

    // }
    

    renderSwitch(path) {
        switch(path) {
            case '/activities':
                return require('../../images/activityLP.jpg');
            case '/parks':
                return require('../../images/parksLP.jpg');
            case '/advanced-search':
                return require('../../images/search.jpg');
            case '/auth':
                return require('../../images/login.jpg');
            case '/activities/biking':
                return require('../../images/biking.jpg');
            case '/activities/paddle-sports':
                return require('../../images/paddleSports.jpeg');
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
            case '/activities/geocaching':
                return require('../../images/geocaching.jpg');
            case '/activities/exercise-trail':
                return require('../../images/exerciseTrail.jpg');
            case '/activities/camping':
                return require('../../images/camping.jpg');
            case '/activities/birding-and-wildlife':
                return require('../../images/birdingWildlife.png');
            case '/parks/dutch-gap-conservation-area':
                return require('../../images/dutchGapConservationArea.jpg');
            case '/parks/henricus-historical-park':
                return require('../../images/henricusHistoricalPark.jpg');
            case '/parks/huguenot-park':
                return require('../../images/huguenotPark.jpg');
            case '/parks/harry-g-daniel-park-at-iron-bridge':
                return require('../../images/harryGDanielParkAtIronBridge.jpg');
            case '/parks/pocahontas-state-park':
                return require('../../images/pocahontasStatePark.jpg');
            case '/parks/r-garland-dodd-park-at-point-of-rocks':
                return require('../../images/rGarlandDoddParkAtPointofRocks.jpg');
            case '/parks/presquile-national-wildlife-refuge':
                return require('../../images/presquileNationalWildlifeRefuge.jpg');
            case '/parks/robious-landing-park':
                return require('../../images/robiousLandingPark.jpg');
            case '/parks/rockwood-park':
                return require('../../images/rockwoodPark.jpg');
            case '/parks/cheswick-park':
                return require('../../images/cheswickPark.jpg');
            case '/parks/deep-bottom-park-and-four-mile-creek':
                return require('../../images/deepBottomParkAndFourMileCreek.jpg');
            case '/parks/deep-run-park-and-recreation-center':
                return require('../../images/deepRunParkAndRecreationCenter.jpg');
            case '/parks/dorey-park-and-recreation-center':
                return require('../../images/doreyParkAndRecreationCenter.jpg');
            case '/parks/dunncroft-castle-point-park':
                return require('../../images/dunncroftCastlePointPark.jpg');
            case '/parks/echo-lake-park':
                return require('../../images/echoLakePark.jpg'); 
                case '/parks/browns-island':
                return require('../../images/brownsIsland.jpg');
            case '/parks/byrd-park':
                return require('../../images/byrdPark.jpg');
            case '/parks/bryan-park':
                return require('../../images/bryanPark.jpg');
            case '/parks/belle-isle':
                return require('../../images/belleIsle3.jpg');
            case '/parks/14th-street-takeout':
                return require('../../images/14thStreetTakeout.jpg');
            case '/parks/hunton-community-center-and-park':
                return require('../../images/huntonCommunityCenterandpark.jpg');
            case '/parks/laurel-recreation-area-and-skate-park':
                return require('../../images/laurelRecreationareaAndSkatePark.jpg');
            case '/parks/meadow-farm-museum-at-crump-park':
                return require('../../images/meadowFarmMuseumAtCrumpPark.jpg');
                case '/parks/osborne-park-and-boat-landing':
                return require('../../images/osborneParkAndBoatLanding.jpg');
                case '/parks/rf-and-p-park':
                return require('../../images/rfAndPPark.jpg');
                case '/parks/shiplock-park':
                return require('../../images/shiplockPark.jpg');
                case '/parks/short-pump-park':
                return require('../../images/shortPumpPark.jpg');
                case '/parks/springfield-park':
                return require('../../images/springfieldPark.jpg');
                case '/parks/three-lakes-park-and-nature-center':
                return require('../../images/threeLakesParkAndNatureCenter.jpg');
                case '/parks/tredegar-street-put-in':
                return require('../../images/tredegarStreetPutIn.jpg');
                case '/parks/tuckahoe-creek-park':
                return require('../../images/tuckahoeCreekPark.jpg');
                case '/parks/twin-hickory-park-and-recreation-center':
                return require('../../images/twinHickoryParkAndRecreationCenter.jpg');
                case '/parks/varina-recreation-area':
                return require('../../images/varinaRecreationArea.jpg');
                case '/parks/virginia-randolph-recreation-area':
                return require('../../images/virginiaRandolphRecreationArea.jpg');  
                case '/parks/pouncey-tract-park':
                return require('../../images/pounceyTractPark.jpg');   
            default: return 'image.jpg';
        }
    }

    getLabel(path) {
        // str.replace(/-/g, ' ')
        const strt = path.lastIndexOf("/") +1;
        let lblParts = path.substr(strt).split("-");

        const lbl = lblParts.map(lblPart => lblPart.charAt(0).toUpperCase() + lblPart.substr(1)).join(" ")
        return lbl;
    }

    render() {
        let lbl = this.getLabel(window.location.pathname); 
        return (
            <div>
                <LazyHero opacity={0.1} color="lightgray" minHeight="65vh" isCentered={true} imageSrc={this.renderSwitch(window.location.pathname)} parallaxOffset={3} >
                <div className="hero-text" headerInfo={this.renderSwitch(window.location.name)}>
                    <h1 style={{color:"white", textShadow:"0 0 2px #f39657"}}>{lbl}</h1>
                </div>
                </LazyHero>
            </div>
        )}
}

export default Hero;



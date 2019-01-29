import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import carousel1 from '../../images/carousel4.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';

class CarouselPage extends Component {
  render() {
    return (
     
        <Carousel style={{height: "75vh"}} activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src={carousel3} alt="Introducing Get Outside RVA" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h1 className="h3-responsive">Introducing Get Outside RVA</h1>
                <br />
                <h4>
                  Get Outside RVA is a movement focused on getting RVA and visitors OUTSIDE. The river city is full of outdoor opportunities and we want to connect everyone to these opportunities.
                </h4>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src={carousel2} alt="Activities" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h1 className="h3-responsive">Activities</h1>
                <br />
                <h4>Whether you are into extreme sports and adrenaline rushes or leisure bike ride along the history James River, Richmond has an activity for you.</h4>
              </CarouselCaption>
            </CarouselItem> 
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src={carousel1} alt="An outdoor lover's dream" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h1 className="h3-responsive">Richmond is an outdoor lover's dream</h1>
                <br />
                <h4>Voted Best River Town by Blue Ridge Outdoors Magazine and Best Town by Outside Magazine</h4>
              </CarouselCaption>
            </CarouselItem>  
          </CarouselInner>
        </Carousel>
    
    );
  }
}

export default CarouselPage;
import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import carousel1 from '../../images/carousel4.jpg';
import carousel2 from '../../images/carousel2.jpg';
import carousel3 from '../../images/carousel3.jpg';

class CarouselPage extends Component {
  render() {
    return (
     
        <Carousel style={{height: "60vh"}} activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src={carousel3} alt="First slide" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Welcome to Richmond VA!</h3>
                <p>
                  Get Outside RVA is a movement focused on getting RVA and visitors OUTSIDE. The river city is full of outdoor opportunities and we want to connect everyone to these opportunities.
                </p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src={carousel2} alt="First slide" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Let's Explore!</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem> 
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src={carousel1} alt="First slide" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Welcome to Richmond RVA</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>  
          </CarouselInner>
        </Carousel>
    
    );
  }
}

export default CarouselPage;
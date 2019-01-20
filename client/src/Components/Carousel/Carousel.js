import React, { Component } from "react";
import { Carousel, Parallax, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
     
        <Carousel style={{height: "60vh"}} activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Welcome to Richmond VA!</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="First slide" />
                <Mask overlay="black-light" />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Let's Explore!</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem> 
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="First slide" />
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
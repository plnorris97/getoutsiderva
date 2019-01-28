import React from "react";
import { MDBMask, MDBContainer, MDBView, MDBRow, } from "mdbreact";




class MaskPage extends React.Component {
  render() {
      const { name, img, activities }= this.props
    return (

       <MDBContainer> 
        <MDBRow className="mt-4" style={{ padding:"1rem", margin:"1rem"}}>
            <MDBView>
              <img
                src= "http://lorempixel.com/400/400/sports/grey"
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="stylish-light" className="flex-center">
              <a href={"activities/"+ activities}><h3 className="white-text"> {name} </h3></a>
              </MDBMask>
            </MDBView>
        </MDBRow>
       </MDBContainer>

    );
  }
}

export default MaskPage;
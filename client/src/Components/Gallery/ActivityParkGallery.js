import React from "react";
import { MDBMask, MDBContainer, MDBView, MDBRow, } from "mdbreact";

import testingImg from '../../images/logo.PNG';



class MaskPage extends React.Component {
  render() {
      const { name, img }= this.props
    return (

       <MDBContainer> 
        <MDBRow className="mt-4" style={{ padding:"1rem", margin:"1rem"}}>
            <MDBView>
              <img
                src= "https://mdbootstrap.com/img/Others/documentation/img%20(7)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="stylish-light" className="flex-center">
                <h3 className="white-text"> {name} </h3>
              </MDBMask>
            </MDBView>
        </MDBRow>
       </MDBContainer>

    );
  }
}

export default MaskPage;
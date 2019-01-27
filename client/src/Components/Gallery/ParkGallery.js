import React from "react";
import { MDBMask, MDBContainer, MDBView, MDBRow, } from "mdbreact";

import testingImg from '../../images/logo.PNG';



class MaskPage extends React.Component {
  render() {
      const { name, img, park }= this.props
    return (

       <MDBContainer> 
        <MDBRow className="mt-4" style={{ width: "15rem", height: "15rem", padding:"1rem", margin:"0.25rem" }}>
            <MDBView>
              <img
                src= "https://mdbootstrap.com/img/Others/documentation/img%20(7)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask overlay="stylish-light" className="flex-center">
              <a href={"/parks/"+park}><h3 className="white-text"> {name} </h3></a>
              </MDBMask>
            </MDBView>
        </MDBRow>
       </MDBContainer>

    );
  }
}

export default MaskPage;
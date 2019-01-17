import React from "react";
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";

class HoverPage extends React.Component {
  render() {
    return (

        <MDBRow className="mt-3">
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Biking</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Running</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>          
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Kayaking</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <h3 className="white-text">Hiking</h3>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
    );
  }
}

export default HoverPage;
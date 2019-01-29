import React from "react";
import { MDBMask, MDBView, MDBRow, MDBCol } from "mdbreact";
import BikeImg from '../../images/biking.jpg';
import RunImg from '../../images/running.jpg';
import KayakImg from '../../images/paddleSports.jpeg';
import HikingImg from '../../images/hiking.jpg';

import "./style.css";

class HoverPage extends React.Component {
  render() {
    return (

        <MDBRow className="mt-3">
          <MDBCol md="3">
            <MDBView hover zoom>
              <img
                src= {BikeImg}
                className="img-fluid gallery-img"
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
                src = {RunImg}
                className="img-fluid gallery-img"
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
                src= {KayakImg}
                className="img-fluid gallery-img"
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
                src= {HikingImg}
                className="img-fluid gallery-img"
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
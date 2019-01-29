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
            <MDBView>
              
              <img
                src= {BikeImg}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
              <a href="/activities/biking"><h3 className="white-text">Biking</h3></a>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView>
              <img
                src = {RunImg}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
              <a href="/activities/running"><h3 className="white-text">Running</h3></a>
              </MDBMask>
            </MDBView>
          </MDBCol>          
          <MDBCol md="3">
            <MDBView>
              <img
                src= {KayakImg}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <a href="/activities/paddle-sports"><h3 className="white-text">Paddle Sports</h3></a>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3">
            <MDBView>
              <img
                src= {HikingImg}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
              <a href="/activities/hiking"><h3 className="white-text">Hiking</h3></a>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
    );
  }
}

export default HoverPage;
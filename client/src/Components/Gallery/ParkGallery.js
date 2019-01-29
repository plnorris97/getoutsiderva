import React from "react";
import { MDBMask, MDBContainer, MDBView, MDBRow, Mask } from "mdbreact";
import parkLP from '../../images/parkLP.png';

const parseStr = (str) => {
  let newStr = str.replace(/-/g,' ')
  let strArr = newStr.split(' ');
  let newArr = []
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1))
  }
  let finishedStr = newArr.join(' ');
  return finishedStr;
}

class MaskPage extends React.Component {
  render() {
      const { name, img, park }= this.props
      const parsedName = parseStr(this.props.name)
    return (

       <MDBContainer> 
        <MDBRow className="mt-4 thumb-nail" >
            <MDBView waves>
              <img
                src= {parkLP}
                className="img-fluid thumb-nail"
                alt=""
              />
              <Mask overlay="black-light" />
              <MDBMask className="flex-center">
              <a href={"/parks/"+ park}><h3 className="white-text"> {parsedName} </h3></a>
              </MDBMask>
            </MDBView>
        </MDBRow>
       </MDBContainer>

    );
  }
}

export default MaskPage;
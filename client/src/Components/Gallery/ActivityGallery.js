import React from "react";
import { MDBMask, MDBContainer, MDBView, MDBRow, Mask } from "mdbreact";
import ActivityCard from '../../images/activityCard.jpg';

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
      const { name, img, activities }= this.props
      const parsedName = parseStr(this.props.name)
    return (

       <MDBContainer> 
        <MDBRow className="mt-3 z-depth-2" style={{ width: "15rem", height: "15rem"}}>
            <MDBView>
              <img
                src= {ActivityCard}
                className="img-fluid"
                alt=""
              
              />
               <Mask overlay="black-light" />
              <MDBMask className="flex-center">
              <a href={"activities/"+ activities}><h3 className="white-text"> {parsedName} </h3></a>
             
              </MDBMask>
            </MDBView>
        </MDBRow>
       </MDBContainer>

    );
  }
}

export default MaskPage;
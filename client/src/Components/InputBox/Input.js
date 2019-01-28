import React from "react";
import { MDBCol, Container, MDBView } from "mdbreact";
import doYou from '../../images/doYou.png';

class Input extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//         input: '',
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)

//   }

//   handleChange(event) {
//     this.setState({
//         [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit() {
// // search the db and if the input matches an item then return the park or activity
// // if the search does not match, return the user a page that says sorry we haven't included
// // that activity, but would love to! Sign up and submit the activity or park and we'll
// // likely add it to our database.
//   }



  render() {
    return (
      <Container style={{ height: "15rem" }}>
      <MDBCol md="12" className="ml-md" style={{ height: "auto" }}>
        <MDBView>
          <img 
          src={doYou} 
          className="img-fluid"
          alt="How do you do RVA?"></img>
        </MDBView>
        {/* <FormInline className="md-form">
          <input
           style={{width: "15rem", BorderBottom: "1px solid #972a05"}}
            className="form-control"
            type="text"
            placeholder="How do YOU do RVA?!"
            aria-label="Search"
            text-align="center"
          />
          <Button outline color="warning"
          >
           <h6> Let's Go! </h6>
          </Button>
        </FormInline> */}
      </MDBCol>
      </Container>
    );
  }
}

export default Input;
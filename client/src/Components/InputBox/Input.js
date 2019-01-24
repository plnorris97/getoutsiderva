import React from "react";
import { Animation, MDBCol, FormInline, Button, Container } from "mdbreact";


class SearchPage extends React.Component {
  constructor() {
    super()
    this.state = {
        input: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
// search the db and if the input matches an item then return the park or activity
// if the search does not match, return the user a page that says sorry we haven't included
// that activity, but would love to! Sign up and submit the activity or park and we'll
// likely add it to our database.
  }



  render() {
    return (
      <Container>
      <MDBCol md="8" className="ml-md-auto">
        <FormInline className="md-form">
          <input
           style={{width: "15rem"}}
            className="form-control"
            type="text"
            placeholder="How do YOU do RVA?!"
            aria-label="Search"
            text-align="center"
          />
          <Button outline color="warning"
          >
          <Animation type="wobble" infinite>
           <h6> Let's Go! </h6>
           </Animation>
          </Button>
        </FormInline>
      </MDBCol>
      </Container>
    );
  }
}

export default SearchPage;
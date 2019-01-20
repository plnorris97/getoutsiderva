import React from "react";
import { Animation, MDBCol, FormInline, Button, Container } from "mdbreact";


class SearchPage extends React.Component {
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
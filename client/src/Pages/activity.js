import React, { Component } from "react";
import API from "../utils/API";
// import layout component


class Activity extends Component {
    state = {
      books: [],
      search: "",
      results: []
    }
    componentDidMount() {
        // look up activities when the page loads
        this.lookUpBooks();
    }

    // Look up activities
    lookUpActivities() {
        API.getActivities()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }   

    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="lg-12">
                <Jumbotron>
                  <h1>My Book Search</h1>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="lg-12">
                <form>
                  <Input
                    value={this.state.search}
                    onChange={this.searchInput}
                    name="search"
                    placeholder="Search Book"
                  />
                  <FormBtn
                    onClick={this.searchAPI}
                  >
                    Search
                  </FormBtn>
                </form>
              </Col>
            </Row>
            <Row>
              {this.state.results.length ? (
                this.state.results.map(book => (
                  <BookWrapper className="card-result"
                    book = {book}
                  />
                ))
              ):(
                <Col className="results" sm="12" md={{size:6, offset:3}}>
                <h3>Enter a book title to get some results.</h3>
                </Col>
              )}
            </Row> 
          </Container>
        );
    }
}
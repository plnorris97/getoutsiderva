import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import SearchBtn from "../Components/SearchBtn/SearchBtn"
import ResultsWrapper from "../Components/ResultsWrapper/ResultsWrapper"
import { readSync } from "fs";

class Detail extends Component {
    state = {
      name: "",
      park: []
    }

    componentDidMount(name) {
        // shows activity name in banner image
        this.showName(name);
    }

    showName = (name) => {
      API.getActivity(name)
      .then(res =>
        this.setState({results: res.data})
      )
      .catch(err => console.log(err))
    }
  

    // Look up parks
    // loadParks() {
    //     API.getCountyParks()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }  
    
    searchDB = event => {
      event.preventDefault();
      // const query = this.state.search.replace(/ /g, "+");
      // let path = "/parks/county?q=" + query
      // console.log(path);
      API.getParks(this.props.match.params.name)
      .then(res =>
        this.setState({park: res.data})
      )
    }

  render() {
    // const data = [{name: ""}];
    // const showName = data.map((data) => <p key={data.name}>{data.name}</p>);

    return (
      <Container>
        <Row>
          <br />
          <br />
          <br />
          <br />
        </Row>
        <Row>
          {/* <Col>{showName}</Col> */}
          <Col>{this.showName()}</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>
            <SearchBtn onClick={this.searchDB}>
              Find parks
            </SearchBtn>
          </Col>
      
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
            {this.state.park.length ? (
              this.state.park.map(park => (
                <ResultsWrapper className="card-result"
                park = {park}
                />
            ))
          ):(
            <Col className="results" sm="12" md={{size:6, offset:3}}>
            <h3>You should see results here.</h3>
            </Col>
          )}
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
      </Container>

      // <Container fluid>
      //   <Row>
      //     <Col size="lg-12">
      //       <Jumbotron>
      //         <h1>My Book Search</h1>
      //       </Jumbotron>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col size="lg-12">
      //       <form>
      //         <Input
      //           value={this.state.search}
      //           onChange={this.searchInput}
      //           name="search"
      //           placeholder="Search Book"
      //         />
      //         <FormBtn
      //           onClick={this.searchAPI}
      //         >
      //           Search
      //             </FormBtn>
      //       </form>
      //     </Col>
      //   </Row>
      //   <Row>
      //         {this.state.results.length ? (
      //           this.state.results.map(book => (
      //             <BookWrapper className="card-result"
      //               book = {book}
      //             />
      //           ))
      //         ):(
      //           <Col className="results" sm="12" md={{size:6, offset:3}}>
      //           <h3>Enter a book title to get some results.</h3>
      //           </Col>
      //         )}
      //       </Row> 
      //     </Container>
        );
    }
}
export default Detail;
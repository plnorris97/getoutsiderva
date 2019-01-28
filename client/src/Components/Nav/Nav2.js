import React from 'react';
import { Nav, NavLink, Container, Row, Col } from 'reactstrap';
import Logo from '../../images/logo-nav.png';
import speed from '../../images/speed.png';
import './style.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <Nav  className="backGround">
        <Container>
          <Row className="logoRow">
            <Col>
            <NavLink href="/"><img className="logo rounded mx-auto d-block" src = {Logo} alt="Get Outside RVA Logo"/></NavLink>
            </Col>
          </Row>  
          <Row>
            <Col>
            <NavLink className="item" href="/">Home</NavLink> 
            <NavLink className="item" href="/activities">Activities</NavLink> 
            <NavLink className="item" href="/destinations">Parks</NavLink> 
            <NavLink className="item" href="/advanced-search">Search</NavLink> 
            <NavLink className="item itemAuth" href="/auth"><img alt="icon" src = {speed} style={{marginRight:"1rem"}}/>Log In/Sign Up</NavLink>
            </Col>
          </Row>
        </Container>
      </Nav>
      </div>
    );
  }
}


import React from 'react';
import { 
  Collapse, 
  Navbar, 
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
import Logo from '../../images/logo-nav.png';
import speed from '../../images/speed.png';
import './style.css';

export default class Nav2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img className="logo" src = {Logo} alt="Get Outside RVA Logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="item" href="/">Home</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="item" href="/activities">Activities</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="item" href="/destinations">Parks</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="item" href="/advanced-search">Search</NavLink>  
              </NavItem>
              <NavItem>
                <NavLink className="item" href="/auth">Log In/Sign Up</NavLink>        
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


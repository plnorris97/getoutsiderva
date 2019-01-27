import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import Logo from '../../images/logo-nav.png';
import './style.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="/"><img className="logo" src = {Logo} alt="Get Outside RVA Logo"/></NavLink>
          <NavLink className="item" href="/">Home</NavLink> 
          <NavLink className="item" href="/activities">Activities</NavLink> 
          <NavLink className="item" href="/destinations">Parks</NavLink> 
          <NavLink className="item" href="/advanced-search">Search</NavLink> 
          <NavLink className="itemAuth" href="/auth">Log In/Sign Up</NavLink>
        </Nav>
      </div>
    );
  }
}


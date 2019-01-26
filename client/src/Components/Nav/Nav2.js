import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import Logo from '../../images/logo.PNG';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="/">< img src = {Logo}/></NavLink> <NavLink href="/activities">Activities</NavLink> <NavLink href="/destinations">Parks</NavLink> <NavLink href="/advanced-search">Search</NavLink> 
        </Nav>
      </div>
    );
  }
}


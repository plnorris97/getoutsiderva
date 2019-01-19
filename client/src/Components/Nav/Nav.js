import React from 'react';
import { MDBNavbar, MDBIcon, Dropdown, NavItem, DropdownToggle, DropdownMenu, DropdownItem, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-warning" fixed="top" dark expand="md" >
              <MDBNavbarBrand href="/">
                <strong>Get Outside RVA</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/activities/"><MDBIcon icon="bicycle" />Activities</MDBNavLink>
                  </MDBNavItem>
                  <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline"><MDBIcon icon="tree" />Destinations</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/destinations/parks/county">Parks</DropdownItem>
                    <DropdownItem href="/destinations/parks/state">Attractions</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <NavItem>
                    <MDBNavItem active>
                        <MDBNavLink to="/advanced-search">Search</MDBNavLink>
                    </MDBNavItem>
                  </NavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

{/* 
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="orange-light" className="flex-center flex-column text-white text-center">
              <h1>Welcome to Richmond</h1>
              <h5></h5>
              <p></p>
            </MDBMask>
          </MDBView> */}
        </header>

        <main>
        
          <MDBContainer className="text-center my-5">
            {/* <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default FixedNavbar;
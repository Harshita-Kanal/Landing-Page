import React, { useState } from 'react';
import {
    Navbar,  NavbarBrand, Nav, NavbarToggler, NavItem, NavLink
} from 'reactstrap';
import { Collapse } from 'reactstrap';
import './navcomp.css'

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className = "navbar" color="light" light expand="md">
       
        <div className="container">
        <NavbarBrand className = "brand" href="/">RAAHEE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem className = "navitem">
                <NavLink className = "nav-link nav-link-ltr" href="/"></NavLink>
              </NavItem>
              <NavItem className = "navitem ">
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem className = "navitem">
                <NavLink href="">Events</NavLink>
              </NavItem>
              <NavItem className = "navitem">
                <NavLink href="">Blogs</NavLink>
              </NavItem>
              <NavItem className = "navitem">
                <NavLink href="">Activity</NavLink>
              </NavItem>
              <NavItem className = "navitem">
                <NavLink href="">Community</NavLink>
              </NavItem>
            </Nav>                                                                                                    
          </Collapse>
      
       
        <div className = "left">
        <button className = "top btn btn-primary " > Sign in </button>
            <button className = "out btn btn-outline-primary" > Sign up </button>
        </div>
        </div>
      
     
        </Navbar>
       
      </div>
    );
  }

  export default NavbarComponent
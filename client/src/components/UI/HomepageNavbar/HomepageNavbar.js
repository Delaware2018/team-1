import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const homepageNavbar = props => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Fake Twitter</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={2} href="#">
            My Profile
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default homepageNavbar;

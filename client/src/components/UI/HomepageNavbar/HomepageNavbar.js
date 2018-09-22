import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const homepageNavbar = props => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">B Positive</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Post
          </NavItem>
          <NavItem eventKey={2} href="#">
            Analytics
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default homepageNavbar;

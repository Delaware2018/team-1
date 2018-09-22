import React from "react";
import { Navbar, Nav, MenuItem } from "react-bootstrap";

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
            <MenuItem eventKey={1} href="#" onClick={props.pageRen}>
              Post
            </MenuItem>
            <MenuItem eventKey={2} href="#" onClick={props.analyticRen}>
              Analytics
            </MenuItem>
            <MenuItem eventKey={2} href="https://us-east-1.online.tableau.com/t/bpositive/views/BePositive/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no" onClick={props.analyticRen}>
              More Analytics
            </MenuItem>
        </Nav>
      </Navbar.Collapse>
      {/* <Route path="/" exact component={Posts} />
      <Route path="/new-post" component={NewPost} /> */}
    </Navbar>
  );
};

export default homepageNavbar;

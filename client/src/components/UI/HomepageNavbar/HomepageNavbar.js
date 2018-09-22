import React from 'react';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

const homepageNavbar = props => {
  return (
    <Navbar style={styles.navBar} inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <p style={styles.item}>Be Positive</p>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <MenuItem
            style={styles.item}
            eventKey={1}
            href="#"
            onClick={props.pageRen}
          >
            <p style={styles.item}>Post</p>
          </MenuItem>
          <MenuItem
            style={styles.item}
            eventKey={2}
            href="#"
            onClick={props.analyticRen}
          >
            <p style={styles.item}>Analytics</p>
          </MenuItem>
          <MenuItem
            eventKey={3}
            href="https://us-east-1.online.tableau.com/t/bpositive/views/BePositive/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
            onClick={props.analyticRen}
          >
            <p style={styles.item}>More Analytics</p>
          </MenuItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const styles = {
  navBar: {
    backgroundColor: '#1DA548',
    borderRadius: '0',
    borderColor: 'transparent'
  },
  item: {
    color: '#F2C632'
  }
};

export default homepageNavbar;

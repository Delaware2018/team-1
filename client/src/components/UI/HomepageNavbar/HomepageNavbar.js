import React from 'react';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

const homepageNavbar = props => {
  return (
    <Navbar style={styles.navBar} inverse>
      <Navbar.Header>
        <Navbar.Brand>
<<<<<<< HEAD
          <a href="/">Be Positive</a>
=======
          <a  href="">B Positive</a>
>>>>>>> f466a5195294ba72bd9efe75b1293e7b59acd47a
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
<<<<<<< HEAD
          <MenuItem eventKey={1} href="#" onClick={props.pageRen}>
            Post
          </MenuItem>
          <MenuItem eventKey={2} href="#" onClick={props.analyticRen}>
            Analytics
          </MenuItem>
          <MenuItem
            eventKey={2}
            href="https://us-east-1.online.tableau.com/t/bpositive/views/BePositive/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no"
            onClick={props.analyticRen}
          >
            More Analytics
          </MenuItem>
=======
            <MenuItem style={styles.item} eventKey={1} href="#" onClick={props.pageRen}>
            <p style={styles.item}>Post</p>
            </MenuItem>
            <MenuItem style={styles.item}  eventKey={2} href="#" onClick={props.analyticRen}>
            <p style={styles.item} >Analytics</p>
            </MenuItem>
            <MenuItem  eventKey={3} href="https://us-east-1.online.tableau.com/t/bpositive/views/BePositive/Dashboard1?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no" onClick={props.analyticRen}>
              <p style={styles.item} >More Analytics</p>
            </MenuItem>
>>>>>>> f466a5195294ba72bd9efe75b1293e7b59acd47a
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const styles = {
  navBar:{
    backgroundColor: '#1DA548',
    borderRadius: '0',
    borderColor: 'transparent',
  },
  item:{
    color:'#F2C632'
  }
}

export default homepageNavbar;

import React from "react";
import { Navbar } from "react-bootstrap";

const navBar = () => {
  return (
    <Navbar inverse style={styles.navBar}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">B Positive</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>   
      </Navbar>    
  );
};
const styles = {
  navBar:{
    backgroundColor: '#1DA548',
    borderRadius: '0',
    borderColor: 'transparent',
  }
}
export default navBar;

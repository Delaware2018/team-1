import React from 'react';
import { Navbar } from 'react-bootstrap';

const navBar = () => {
  return (
<<<<<<< HEAD
    <Navbar inverse>
=======
    <Navbar inverse style={styles.navBar}>
>>>>>>> f466a5195294ba72bd9efe75b1293e7b59acd47a
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Be Positive</a>
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

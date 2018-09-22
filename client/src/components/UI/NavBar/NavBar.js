import React from 'react';
import { Navbar } from 'react-bootstrap';

const navBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Be Positive</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  );
};

export default navBar;

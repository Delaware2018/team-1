import React from "react";
import {
  Form,
  FormControl,
  ControlLabel,
  Row,
  Grid,
  Col,
  Button,
  ButtonToolbar
} from "react-bootstrap";

const signup = props => {
   
  return (
    <Grid>
      <Form>
        <ControlLabel>
          <h2>Sign Up</h2>
        </ControlLabel>
        <Row>
          <Col md={3}>
            <p>First Name:</p>
          </Col>
          <Col md={9}>
            <FormControl
              id="formControlsFirstName"
              type="input"
              label="First Name"
              name='fname'
              placeholder="First Name"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <p>Last Name:</p>
          </Col>
          <Col md={9}>
            <FormControl
              id="formControlsLastName"
              type="input"
              label="Last Name"
              name='lname'
              placeholder="Last Name"
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <p>Username:</p>
          </Col>
          <Col md={9}>
            <FormControl
              id="formControlsUsername"
              type="username"
              label="Username"
              name='username'
              placeholder="Enter Username"
              autoComplete='username'
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <p>Email:</p>
          </Col>
          <Col md={9}>
            <FormControl
              id="formControlsEmail"
              type="email"
              label="Email address"
              name='email'
              placeholder="Enter email"
              autoComplete='email'
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p>Password:</p>
          </Col>
          <Col md={8}>
            <FormControl
              id="formControlsPassword"
              label="Password"
              type="password"
              name='password'
              placeholder="Password"
              autoComplete="new-password"
            />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <p>Re-type Password:</p>
          </Col>
          <Col md={8}>
            <FormControl
              id="formControlsRetypePassword"
              label="ReType Password"
              type="password"
              name='retypePassword'
              placeholder="Re-type Password"
              autoComplete="new-password"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} mdOffset={8}>
            <ButtonToolbar>
              <Button onClick={props.author} >Submit Sign Up</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Form>
    </Grid>
  );
};

export default signup;

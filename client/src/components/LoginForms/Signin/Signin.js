import React from "react";
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Checkbox,
  Button
} from "react-bootstrap";

const signin = props => {
  return (
    <Form horizontal>
      <p />
      <FormGroup controlId="formHorizontalEmail">
        <Col md={2}>
          <p>Email:</p>
        </Col>
        <Col md={10}>
          <FormControl
            onChange={props.signInHandler}
            name="emailusername"
            type="email"
            placeholder="Email or Username"
            autoComplete="userName"
          />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col md={2}>
          <p>Password:</p>
        </Col>
        <Col md={10}>
          <FormControl
            onChange={props.signInHandler}
            name="password"
            controlid="currentPassword"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button onClick={props.author}>Sign in</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};
export default signin;

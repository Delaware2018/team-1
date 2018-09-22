import React from "react";
import {
  Jumbotron,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Grid,
  Col,
  Row
} from "react-bootstrap";

const post = props => {
  return (
    <Jumbotron>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>My Post</ControlLabel>
        <Grid>
          <Row>
            <Col md={2}>
              <p>Post</p>
            </Col>
            <Col md={10}>
              <FormControl
                name="post"
                componentClass="textarea"
                placeholder="Post to be sent to apps"
                onChange={props.textHandler}
              />
            </Col>
          </Row>
          <p />
          <Row>
            <Col md={2}>
              <p>URL</p>
            </Col>
            <Col md={10}>
              <FormControl
                name="url"
                placeholder="Enter Youtube Link"
                onChange={props.textHandler}
              />
            </Col>
          </Row>
        </Grid>
      </FormGroup>
      <Button onClick={props.feedPost}>Post</Button>
    </Jumbotron>
  );
};

export default post;

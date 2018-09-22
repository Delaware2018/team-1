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
                <p>Type</p>
              </Col>
              <Col md={10}>
                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="select" name='feedType' onChange={props.textHandler}>
                    <option value="...">...</option>
                    <option value="Post">Post</option>
                    <option value="Event">Event</option>
                    <option value="URL">URL</option>
                    <option value="Location">Location</option>
                  </FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col md={2}>
              <p>Title</p>
            </Col>
            <Col md={10}>
              <FormControl name="feedName" placeholder="Title..." onChange={props.textHandler}/>
            </Col>
          </Row>
            <Row>
            <Col md={2}>
              <p>Location</p>
            </Col>
            <Col md={10}>
              <FormControl name="feedLocation" placeholder="Location..." onChange={props.textHandler} />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <p>URL</p>
            </Col>
            <Col md={10}>
              <FormControl name="feedUrl" placeholder="Enter URL to share..." onChange={props.textHandler} />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <p>Post</p>
            </Col>
            <Col md={10}>
              <FormControl
                name="feedContent"
                componentClass="textarea"
                placeholder="Post to be sent to apps"
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

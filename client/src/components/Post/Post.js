import React from "react";
import {
  Jumbotron,
  FormGroup,
  ButtonToolbar,
  ControlLabel,
  FormControl,
  Button,
  Grid,
  Col,
  Row
} from "react-bootstrap";

const post = props => {
    return (
    <Jumbotron style={styles.container}>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel style={styles.label}>New Feed</ControlLabel>
        <Grid>
          <Row>
            <Col md={2}>
              <p>Type</p>
            </Col>
            <Col md={10}>
              <FormGroup controlId="formControlsSelect">
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  name="feedType"
                  onChange={props.textHandler}
                >
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
              <FormControl
                name="feedName"
                placeholder="Title..."
                onChange={props.textHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <p>Location</p>
            </Col>
            <Col md={10}>
              <FormControl
                name="feedLocation"
                placeholder="Location..."
                onChange={props.textHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <p>URL</p>
            </Col>
            <Col md={10}>
              <FormControl
                name="feedUrl"
                placeholder="Enter URL to share..."
                onChange={props.textHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col md={2}>
                <p style={styles.font}>Content</p>
            </Col>
            <Col md={10}>
              <FormControl
                style={{ height: "250px" }}
                name="feedContent"
                componentClass="textarea"
                placeholder="Post to be sent to apps"
                onChange={props.textHandler}
              />
            </Col>
          </Row>
          <p></p>
          <Row>
            <Col  xsOffset={8} md={1}>
              <ButtonToolbar>
                <Button bsSize="large" onClick={props.feedPost}>
                  Post To All Users
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </FormGroup>
    </Jumbotron>
  );
};

const styles = {

    label: {

        fontSize: 30,
        marginBottom: 25
    },
    inputs: {

        width: '50%',

    }
}

export default post;

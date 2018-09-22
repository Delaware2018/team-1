import React, { Component } from "react";
import { Jumbotron, Grid, Row, Col, Tabs, Tab } from "react-bootstrap";
import Signin from "../LoginForms/Signin/Signin";
import Signup from "../LoginForms/Signup/Signup";

const loginForms = props => {
  return (
    <Grid>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron>
            <ControlledTabs
             props={props.author}
            />
          </Jumbotron>
        </Col>
        <Col md={2} />
      </Row>
    </Grid>
  );
};

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="Sign In">
          <Signin auth={this.props.author}/>
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <Signup auth={this.props.author}/>
        </Tab>
      </Tabs>
    );
  }
}
export default loginForms;

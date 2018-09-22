import React, { Component } from "react";
import Wrap from "../../hoc/wrap";
import HomepageNavbar from "../../components/UI/HomepageNavbar/HomepageNavbar";
import Analytics from "../../components/Analytics/Analytics";
import Post from "../../components/Post/Post";

import { Grid, Col, Row } from "react-bootstrap";
import socketIOClient from "socket.io-client";


class Homepage extends Component {
  constructor (props){
    super(props);
  
    this.state = {
      endpoint: "http://localhost:5000/",
      postToApp: {
        feedType: null,
        feedName: null,
        feedContent: null,
        feedLocation: null,
        feedUrl: null
      },
      page: true
    };
    this.toPost= this.toPost.bind(this);
    this.toAnalytics= this.toAnalytics.bind(this);
    this.postTextHandler= this.postTextHandler.bind(this);
    this.sendMyPostToDatabase=this.sendMyPostToDatabase.bind(this);
  } 

  toPost(event){
    this.setState({page: true});
  }
  toAnalytics(event){
    this.setState({page: false});
  }
  postTextHandler = event => {
    const myLocalReplacement = this.state.postToApp;
    myLocalReplacement[event.target.name] = event.target.value;
    this.setState({ postToApp: myLocalReplacement });
  };
  // handle = event =>{
  //   this.setState({feedName: event.target.value});
  //   console.log(this.spostToApp)
  // }

  sendMyPostToDatabase = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("sendFeed", this.state.postToApp);
  };

  render() {
    return (
      <Wrap>
        <HomepageNavbar pageRen={this.toPost} analyticRen={this.toAnalytics}/>
        <Grid>
          <Row>
            <Col md={2} />
            <Col md={8}>
              {this.state.page ? <Post
                feedPost={this.sendMyPostToDatabase}
                textHandler={this.postTextHandler}
              /> : <Analytics/>}
            </Col>
            <Col md={2} />
          </Row>
        </Grid>
      </Wrap>
    );
  }
}
export default Homepage;

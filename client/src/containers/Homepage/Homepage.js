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
    // const myLocalReplacement = this.state.postToApp;
    // console.log(this.state.postToApp);
    // myLocalReplacement[event.target.name] = event.target.value;
    // console.log(myLocalReplacement);
    // let pie = Object.assign({}, this.state.postToApp);
    // pie[event.target.name] = event.target.value;
    // this.setState({...this.state, postToApp[event.target.name]:{feedUrl: event.target.value}},()=>(console.log(this.state)));
    // console.log( 'hell' + this.state.postToApp.feedName);
    const myLocalReplacement = this.state.postToApp;
    myLocalReplacement[event.target.name] = event.target.value;
    this.setState({ myLocal: myLocalReplacement });
  };
  handle = event =>{
    this.setState({feedName: event.target.value});
    console.log(this.spostToApp)
  }

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

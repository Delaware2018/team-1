import React, { Component } from "react";
import Wrap from "../../hoc/wrap";
import HomepageNavbar from "../../components/UI/HomepageNavbar/HomepageNavbar";
import Analytics from '../../components/Analytics/Analytics';
import Post from "../../components/Post/Post";
import { Grid, Col, Row } from "react-bootstrap";
import socketIOClient from 'socket.io-client';


class Homepage extends Component {
    state = {
        endpoint: "http://localhost:5000/",
        postToApp:{
            feedType:null,
            feedName: null,
            feedContent: null,
            feedLocation: null, 
            feedUrl: null
          },
    }
    postTextHandler = event => {
        const myLocalReplacement = this.state.postToApp;
        myLocalReplacement[event.target.name] = event.target.value;
        this.setState({myLocal: myLocalReplacement});
        // console.log(this.state.myLocal);
      };

    sendMyPostToDatabase=()=>{
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('sendFeed', this.state.postToApp);
      };

  render() {
    return (
      <Wrap>
        <HomepageNavbar />
        <Grid>
          <Row>
            <Col md={2} />
            <Col md={8}>
              {/* <Post feedPost={this.sendMyPostToDatabase} textHandler={this.postTextHandler}/> */}
                <Analytics/>
            </Col>
            <Col md={2} />
          </Row>
        </Grid>
      </Wrap>
    );
  }
}
export default Homepage;

import React, { Component } from 'react';
import Login from './containers/Login/Login';
import './App.css';

class App extends Component {
  state = {
    authorized: false 
  }
  authorizedUser(){
    console.log(this.state.authorized);
  }
  render() {
    return (
      <div className="App">
        {this.state.authorized ? <p>Going well</p> : <Login author={this.authorizedUser} />}
      </div>
    );
  }
}

export default App;

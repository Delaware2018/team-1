import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Login from './containers/Login/Login';
import Homepage from './containers/Homepage/Homepage';
// import {} from 're'
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
  
    this.state = {
        authorized: false
      };
    this.authorizedUser = this.authorizedUser.bind(this);
  }
  state = {
    authorized: null 
  }
  authorizedUser(event){
    const aut = this.state.authorized;
    this.setState({authorized: !aut})
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        {this.state.authorized ? <Homepage/>: <Login author={ this.authorizedUser.bind(this)} />}

      </div>
      </BrowserRouter>
    );
  }
}

export default App;

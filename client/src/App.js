import React, { Component } from 'react';
import Login from './containers/Login/Login';
import Homepage from './containers/Homepage/Homepage';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
  
    this.state = {
        authorized: false
      };
    this.authorizedUser = this.authorizedUser.bind(this);
  }
  // signInHandler (event) {
  //   const signInValue = this.state.signIn;
  //   myLocalReplacement[event.target.name] = event.target.value;
  //   this.setState({ signIn: myLocalReplacement })
  // }
  authorizedUser(event){
    const aut = this.state.authorized;
    this.setState({authorized: !aut})
  }
  render() {
    return (
      <div className="App">
        {this.state.authorized ? <Homepage/>: <Login author={this.authorizedUser.bind(this) } />}
      </div>
    );
  }
}

export default App;

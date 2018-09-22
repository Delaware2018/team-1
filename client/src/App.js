import React, { Component } from 'react';
import Wrap from './hoc/wrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrap>
          <p>Hello</p>
        </Wrap>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
 
  state={
    strng:""
  }
 

  render() {

    
    return (
      <input onChange={this.state.strng} value={this.state.strng} />
    );
  }
}

export default App;

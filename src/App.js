import React, { Component } from "react";
import "./App.css";
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
 
  state={
    strng:""
  }
 

  render() {

    
    return (
      <input type="text" strLen={this.state.strng.length} onChange={this.state.strng} value={this.state.strng} />
    );
  }
}

export default App;

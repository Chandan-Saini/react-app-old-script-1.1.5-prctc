import React, { Component } from "react";
import "./App.css";
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
 
  state=({
    str:"chandan"
  })
 
  getComponent=()=>{
    
  }
  render() {

    
    return (
      <ValidationComponent change={()=>this.getComponent} />
    );
  }
}

export default App;

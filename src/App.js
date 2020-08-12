import React, { Component } from "react";
import "./App.css";
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {
 
  state={
    strng:""
  }
 
 strngChangeHandler=(event)=>{
   this.setState({
     strng:event.target.value
   })
 }
  render() {

    
    return (
      <div>
        <input type="text"  onChange={this.strngChangeHandler} value={this.state.strng} />
        <p>{this.state.strng}</p>
        <ValidationComponent strlen={this.state.strng.length} />
      </div>
    );
  }
}

export default App;

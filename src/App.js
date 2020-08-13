import React, { Component } from "react";
import "./App.css";
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComp from './CharComp/CharComp'
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
        <CharComp str={this.state.strng} />
      </div>
    );
  }
}

export default App;

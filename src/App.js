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

 charHandler=()=>{
  
   
 }
  render() {
    const chList = this.state.strng.split('').map((ch,index) => {
      return <CharComp chr={ch} key={index}/>
    })
    
    return (
      <div>
        <input type="text"  onChange={this.strngChangeHandler} value={this.state.strng} />
        <p>{this.state.strng}</p>
        <ValidationComponent strlen={this.state.strng.length} />
        {chList}
      </div>
    );
  }
}

export default App;

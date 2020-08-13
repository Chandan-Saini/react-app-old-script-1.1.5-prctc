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

 charDeleteHandler=(index)=>{
  const text=this.state.strng.split('')
   const text2 = text.splice(index, 1)
  const updatedText= text2.join('')
  this.setState({strng:updatedText})

   
 }
  render() {
    const chList = this.state.strng.split('').map((ch,index) => {
      return <CharComp del={()=>this.charDeleteHandler(index)} chr={ch} key={index}/>
    })
    
    return (
      <div className="App">
        <input type="text"  onChange={this.strngChangeHandler} value={this.state.strng} />
        <p>{this.state.strng}</p>
        <ValidationComponent strlen={this.state.strng.length} />
        {chList}
      </div>
    );
  }
}

export default App;

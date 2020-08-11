import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {

  state={
    userName:" Chandan from state"
  }

  stateHandler=(event)=>{
    this.setState({
      userName:event.target.value
    })
  }
  render() {

    return (
      <div className="App">
        
        <UserInput change={this.stateHandler} curName={this.state.userName} />
        <UserOutput click={this.stateHandler} userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={"akku"} />
      </div>
    );
  }
}

export default App;

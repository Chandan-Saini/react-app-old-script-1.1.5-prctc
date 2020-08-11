import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"

class App extends Component {

  state={
    userName:" Chandan from state"
  }

  stateHandler=()=>{
    this.setState({
      userName:"Chandan from handler"
    })
  }
  render() {

    return (
      <div className="App">
        
        <UserInput />
        <UserOutput click={this.stateHandler} userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={"akku"} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Keypad extends Component 
{
  handleEvent = () => {
    console.log("Entering password...");
  }

  render()
  {
    return (
      <input type="password" onKeyUp={this.handleEvent} />
    )
  }
}

export default Keypad;
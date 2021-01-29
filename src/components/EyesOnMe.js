// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props);

  }

  handleFocus = (e) => {
    console.log("Good!");
  }

  handleBlur = (e) => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur} value="Button!" />
    );
  }
}
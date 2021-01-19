// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {   
    blurOutput = () => console.log("Hey! Eyes on me!")
    focusOutput = () => console.log("Good!")


    render() {
        return (
        <button
        onFocus={this.focusOutput}
        onBlur={this.blurOutput}/>
        )}
}
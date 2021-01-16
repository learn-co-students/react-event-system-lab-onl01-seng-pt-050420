import React from 'react'

export default class Keypad extends React.Component {
    constructor(props) {
        super();
    }

    inputHandler = (e) => {
        console.log('Entering password...');
    }

    render() {
        return (
            <input type="password" onKeyUp={this.inputHandler}></input>
        )
    }
}
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    focusHandler = (e) => {
        console.log('Good!')
    }

    blurHandler = (e) => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return(
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler} />
            </div>

        )
    }
}

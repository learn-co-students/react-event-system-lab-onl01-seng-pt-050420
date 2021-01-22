// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    
    handleInputPassword = () => (
        console.log('Entering password...')
    )
        
    render() {
        return (
            <div>
                
                <input onKeyUp={this.handleInputPassword} type="password"></input> 
                
            </div> 
        ) 
    }
}
export default Keypad;
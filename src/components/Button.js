'use strict';

import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={this.props.clickHandler}>{this.props.text}</button>
        )
    }
}

Button.propTypes = {
    clickHandler : React.PropTypes.func.isRequired,
    text : React.PropTypes.string.isRequired
}

module.exports ={
    Button : Button
}

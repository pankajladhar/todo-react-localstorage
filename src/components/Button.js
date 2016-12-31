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

module.exports ={
    Button : Button
}

import React from 'react';

let Greeting = (props) =>{
    return(
        <h1>
            {props.message}
        </h1>
    )
};

Greeting.propTypes = {
    message: React.PropTypes.string.isRequired
};

module.exports = {
    Greeting : Greeting
}

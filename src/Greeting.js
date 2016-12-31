import React from 'react';

let Greeting = (props) =>{
    return(
        <h1>
            {props.message}
        </h1>
    )
};

module.exports = {
    Greeting : Greeting
}
// Code Keypad Component Here
import React from "react";

function enteringPassword() {
    console.log( "Entering password..." );
}

function Keypad() {
    return (
        <input type="password" onChange={ enteringPassword }></input>
    );
}

export default Keypad;

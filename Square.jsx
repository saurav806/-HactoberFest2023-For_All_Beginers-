import React, { useState } from "react";
import './square.css';

function Square ({value, onSquareClick}) {

    return (
            <button 
                onClick={onSquareClick}
            >
                {value}
            </button>
    );
}

export default Square;
import React from "react";
import { useState } from "react";
import './Display.css'

export default (props)=>{

    const [calc, setCalc] = useState ('0')


    return(
        <div className="display">
            <p>{props.displayValueLength === 0 ? '0' : props.displayValue}</p>
        </div>
    )
}
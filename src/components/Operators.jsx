import React from "react";
import './Operators.css'

export default (props)=>{
    return(
        <>
             <button className="operatorsstyle" value={props.operation} onClick={props.click}><strong>{props.operation}</strong></button>
        </>
    )
}
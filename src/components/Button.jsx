import React from "react";
import Display from "./Display";
import "./Button.css"


export default (props)=>{
    return(
        <button className="button" onClick={props.onClick} value={props.valor}>{props.valor}</button>
    )
}